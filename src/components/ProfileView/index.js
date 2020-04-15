import React from "react"
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import View from "../View"
import { getCurrentUser } from "../../utils/auth"
import Emoji from "../../utils/emoji";
import FormTextInputField from "../FormTextInputField";
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Alert from 'react-bootstrap/Alert'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ProfileView = () => {
  const { name, username, email } = getCurrentUser()
  const profileHeading = "Coach " + name + "'s Office"

  return (
    <View heading={profileHeading}>
      <Alert variant="warning"><strong>Coaching Alert!</strong> Check your trophy case. <Emoji symbol="🏆" label="Trophy"/></Alert>
      <Container fluid="md">
        <Row>
          <Col>
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
                {/* <button type="submit" className="form__button">Submit</button> */}
                <Button type="submit">Submit</Button>
              </Form>
            </Formik>
          </Col>
          <Col>
            <div>
              <h3>Trophy Case <Emoji symbol="🏆" label="1st Place"/></h3>
              <h4>2020</h4>
              <Emoji symbol="🏆" label="1st Place"/>
              <Emoji symbol="🥈" label="2nd Place"/>
              <Emoji symbol="🥉" label="3rd Place"/><Badge pill variant="warning">
                New
              </Badge>
              <h4>2019</h4>
              <Emoji symbol="🏆" label="1st Place"/>
              <Emoji symbol="🥈" label="2nd Place"/>
              <h4>2018</h4>
              <Emoji symbol="🏆" label="1st Place"/>
              <Emoji symbol="🥈" label="2nd Place"/>
            </div>
          </Col>
        </Row>
      </Container>
    </View>
  )
}

export default ProfileView