import React from "react"
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import View from "../View"
import { getCurrentUser } from "../../utils/auth"
import Emoji from "../../utils/emoji";
import FormTextInputField from "../FormTextInputField";

const ProfileView = () => {
  const { name, username, email } = getCurrentUser()
  const profileHeading = "Coach " + name + "'s Office"

  return (
    <View heading={profileHeading}>
      <p>Here's the current info we have for your profile.
      </p>
      <Formik
        initialValues={{ name: name, username: username, email: email }}
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
          <button type="submit" className="form__button">Submit</button>
        </Form>
      </Formik>
      <div>
        <h3>Trophy Case <Emoji symbol="🏆" label="1st Place"/></h3>
        <Emoji symbol="🏆" label="1st Place"/>
        <Emoji symbol="🥈" label="2nd Place"/>
        <Emoji symbol="🥉" label="3rd Place"/>
      </div>
    </View>
  )
}

export default ProfileView