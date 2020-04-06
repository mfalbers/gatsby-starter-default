import React from "react"
import { Formik } from 'formik';
import * as Yup from 'yup';
import View from "../View"
import { getCurrentUser } from "../../utils/auth"
import Emoji from "../../utils/emoji";

const ProfileView = () => {
  const { name, username, email } = getCurrentUser()
  const profileHeading = "Coach " + name + "'s Office"

  return (
    <View heading={profileHeading}>
      <p>Here's the current info we have for your profile.
        TODO update just like sign up form
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
        {formik => (
          <form onSubmit={formik.handleSubmit} className="form">
            <label htmlFor="name" className="form__label">Preferred Name</label>
            <input id="name" className="form__input" placeholder="MJ" {...formik.getFieldProps('name')} />
            {formik.touched.name && formik.errors.name ? (
              <div className="form__error">{formik.errors.name}</div>
            ) : null}
            <label htmlFor="username" className="form__label">Username</label>
            <input id="username" className="form__input" placeholder="jumpman23" {...formik.getFieldProps('username')} />
            {formik.touched.username && formik.errors.username ? (
              <div className="form__error">{formik.errors.username}</div>
            ) : null}
            <label htmlFor="email" className="form__label">Email Address</label>
            <input id="email" className="form__input" placeholder="jumpman23@nike.com" {...formik.getFieldProps('email')} />
            {formik.touched.email && formik.errors.email ? (
              <div className="form__error">{formik.errors.email}</div>
            ) : null}
            <button type="submit" className="form__button">Update</button>
          </form>
        )}
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