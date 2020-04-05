import React from 'react';
import { useFormik } from 'formik';

// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length > 15) {
    errors.name = 'Must be 15 characters or less';
  }

  if (!values.username) {
    errors.username = 'Required';
  } else if (values.username.length > 20) {
    errors.username = 'Must be 20 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

const SignupForm = () => {
  // Notice that we have to initialize ALL of fields with values. These
  // could come from props, but since we don't want to prefill this form,
  // we just use an empty string. If you don't do this, React will yell
  // at you.
  const formik = useFormik({
    initialValues: {
      name: '',
      username: '',
      email: '',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="form">
      <p className="form__instructions">
      Think you are ready to coach coach? Fill out your info below.
      </p>
      <label htmlFor="name" className="form__label">Preferred Name</label>
      <input
        className="form__input"
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
        placeholder="MJ"
      />
      {formik.errors.name ? <div className="form__error">{formik.errors.name}</div> : null}
      <label htmlFor="username" className="form__label">Username</label>
      <input
        className="form__input"
        id="username"
        name="username"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.username}
        placeholder="jumpman23"
      />
      {formik.errors.username ? <div className="form__error">{formik.errors.username}</div> : null}
      <label htmlFor="email" className="form__label">Email Address</label>
      <input
        className="form__input"
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        placeholder="jumpman23@nike.com"
      />
      {formik.errors.email ? <div className="form__error">{formik.errors.email}</div> : null}
      <button className="form__button" type="submit">Submit</button>
    </form>
  );
};

export default SignupForm