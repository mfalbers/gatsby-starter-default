import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormTextInputField from '../FormTextInputField';
import { isLoggedIn } from "../../utils/auth"
// import { Link } from 'gatsby';
import Button from 'react-bootstrap/Button';

export default () => {
  let registrationForm
  if (!isLoggedIn()) {
    registrationForm = (
      <Formik
        initialValues={{ name: '', username: '', email: '' }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(50, 'Must be 50 characters or less')
            .required('Required'),
            username: Yup.string()
            .max(30, 'Must be 30 characters or less')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className="form">
          <p className="form__instructions">
          Think you are ready to coach coach? Fill out your info below.
          </p>
          <FormTextInputField
            label="Preferred Name"
            name="name"
            type="text"
            placeholder="MJ"
          />
          <FormTextInputField
            label="Username"
            name="username"
            type="text"
            placeholder="jumpman23"
          />
          <FormTextInputField
            label="Email"
            name="email"
            type="text"
            placeholder="jumpman23@nike.com"
          />
          {/* <button type="submit" className="form__button">Register</button>{`   `}<Link to="/app/login">Log In</Link> */}
          <Button variant="primary" type="submit">Register</Button>{` `}<Button variant="link" href="/app/login">Log In</Button>
        </Form>
      </Formik>
    ) 
  } else {
    registrationForm = null
  }

  return registrationForm
}