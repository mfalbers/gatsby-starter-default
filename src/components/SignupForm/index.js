import React from 'react';
// import { useFormik } from 'formik';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Replace with Yup
// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
// const validate = values => {
//   const errors = {};
//   if (!values.name) {
//     errors.name = 'Required';
//   } else if (values.name.length > 15) {
//     errors.name = 'Must be 15 characters or less';
//   }

//   if (!values.username) {
//     errors.username = 'Required';
//   } else if (values.username.length > 20) {
//     errors.username = 'Must be 20 characters or less';
//   }

//   if (!values.email) {
//     errors.email = 'Required';
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = 'Invalid email address';
//   }

//   return errors;
// };

const SignupForm = () => {
  return (
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
      <label htmlFor="name" className="form__label">Preferred Name</label>
      <Field name="name" type="text" className="form__input" placeholder="MJ" />
      <ErrorMessage name="name" component="div" className="form__error" />
      <label htmlFor="username" className="form__label">Username</label>
      <Field name="username" type="text" className="form__input" placeholder="jumpman23" />
      <ErrorMessage name="username" component="div" className="form__error" />
      <label htmlFor="email" className="form__label">Email Address</label>
      <Field name="email" type="email" className="form__input" placeholder="jumpman23@nike.com" />
      <ErrorMessage name="email" component="div" className="form__error" />
      <button type="submit" className="form__button">Submit</button>
    </Form>
  </Formik>

  // version 2
    // <Formik
    //   initialValues={{ name: '', username: '', email: '' }}
    //   validationSchema={Yup.object({
    //     name: Yup.string()
    //       .max(50, 'Must be 50 characters or less')
    //       .required('Required'),
    //     username: Yup.string()
    //       .max(30, 'Must be 30 characters or less')
    //       .required('Required'),
    //     email: Yup.string()
    //       .email('Invalid email address')
    //       .required('Required'),
    //   })}
    //   onSubmit={(values, { setSubmitting }) => {
    //     setTimeout(() => {
    //       alert(JSON.stringify(values, null, 2));
    //       setSubmitting(false);
    //     }, 400);
    //   }}
    // >
    //   {formik => (
    //     <form onSubmit={formik.handleSubmit} className="form">
    //       <label htmlFor="name" className="form__label">Preferred Name</label>
    //       <input id="name" className="form__input" placeholder="MJ" {...formik.getFieldProps('name')} />
    //       {formik.touched.name && formik.errors.name ? (
    //         <div className="form__error">{formik.errors.name}</div>
    //       ) : null}
    //       <label htmlFor="username" className="form__label">Username</label>
    //       <input id="username" className="form__input" placeholder="jumpman23" {...formik.getFieldProps('username')} />
    //       {formik.touched.username && formik.errors.username ? (
    //         <div className="form__error">{formik.errors.username}</div>
    //       ) : null}
    //       <label htmlFor="email" className="form__label">Email Address</label>
    //       <input id="email" className="form__input" placeholder="jumpman23@nike.com" {...formik.getFieldProps('email')} />
    //       {formik.touched.email && formik.errors.email ? (
    //         <div className="form__error">{formik.errors.email}</div>
    //       ) : null}
    //       <button type="submit" className="form__button">Submit</button>
    //     </form>
    //   )}
    // </Formik>


  // Version 1
  // Notice that we have to initialize ALL of fields with values. These
  // could come from props, but since we don't want to prefill this form,
  // we just use an empty string. If you don't do this, React will yell
  // at you.
  // const formik = useFormik({
  //   initialValues: {
  //     name: 'Matt',
  //     username: '',
  //     email: '',
  //   },
  //   validationSchema: Yup.object({
  //     name: Yup.string()
  //       .max(50, 'Must be 50 characters or less')
  //       .required('Required'),
  //     username: Yup.string()
  //       .max(30, 'Must be 30 characters or less')
  //       .required('Required'),
  //     email: Yup.string()
  //       .email('Invalid email address')
  //       .required('Required'),
  //   }),
  //   onSubmit: values => {
  //     alert(JSON.stringify(values, null, 2));
  //   },
  // });
  // return (
  //   <form onSubmit={formik.handleSubmit} className="form">
  //     <p className="form__instructions">
  //     Think you are ready to coach coach? Fill out your info below.
  //     </p>
  //     <label htmlFor="name" className="form__label">Preferred Name</label>
  //     <input
  //       className="form__input"
  //       name="name"
  //       placeholder="MJ"
  //       {...formik.getFieldProps('name')}
  //     />
  //     {formik.touched.name && formik.errors.name ? <div className="form__error">{formik.errors.name}</div> : null}
  //     <label htmlFor="username" className="form__label">Username</label>
  //     <input
  //       className="form__input"
  //       name="username"
  //       placeholder="jumpman23"
  //       {...formik.getFieldProps('username')}
  //     />
  //     {formik.touched.username && formik.errors.username ? <div className="form__error">{formik.errors.username}</div> : null}
  //     <label htmlFor="email" className="form__label">Email Address</label>
  //     <input
  //       className="form__input"
  //       name="email"
  //       placeholder="jumpman23@nike.com"
  //       {...formik.getFieldProps('email')}
  //     />
  //     {formik.touched.email && formik.errors.email ? <div className="form__error">{formik.errors.email}</div> : null}
  //     <button className="form__button" type="submit">Submit</button>
  //   </form>
  );
};

export default SignupForm