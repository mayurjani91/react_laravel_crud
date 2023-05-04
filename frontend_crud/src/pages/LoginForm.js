import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

export function LoginForm() {
  const styleCard = {
    margin: '100px',
  };

  const formCard = {
    color: 'blue',
    fontWeight: 'bold',
    margin: '20px',
    marginTop:"10px",
    marginBottom:"10px",
  };
  return (
    <div className="container">
      <div className="card" style={styleCard}>
    <h3 className='text-center'>Login Form</h3>
    <Formik
          initialValues={{ email: '', password: ''}}
          validationSchema={Yup.object().shape({
            email: Yup.string().email('Invalid email').required('Email is required'),
            password: Yup.string().required('Password is required'),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form style={formCard}>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <Field type="email" name="email" className="form-control" />
                <ErrorMessage name="email" component="div" className="text-danger" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field type="password" name="password" className="form-control" />
                <ErrorMessage name="password" component="div" className="text-danger" />
              </div>

              <button style={{marginTop:"10px"}}type="submit" className="btn btn-primary" disabled={isSubmitting}>
                Submit
              </button>
              <br></br>
              <span style={{color:'black', fontFamily:'serif'}}>
              Want to register?
           <Link to='/registrationForm'> Click here to Register</Link> <span>&#128512;</span>
              </span>
              <br></br>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}