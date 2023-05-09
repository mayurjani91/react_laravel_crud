import React, { Fragment } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import http from '../http';

export function LoginForm() {
  const navigate  = useNavigate();
  
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

  const submitForm = (inputs) => {
    http.post('auth/login', inputs)
      .then((res) => {
        const token = res.data.access_token;
        let accesstoken = '';
        Object.entries(token).forEach(([key, value]) => {
          accesstoken +=`${value}`;
        });
          localStorage.setItem('accesstoken', accesstoken)
          // localStorage.getItem('itemName')
          const logintoken = localStorage.getItem('accesstoken');
          <Fragment>
          {logintoken !== ""?navigate('/home')
          :navigate('/')
      }
    </Fragment>
        navigate('/home');
      })
      .catch((error) => {
        if (error.response) {
          const errors = error.response.data;
        let errorMessages = '';
        Object.entries(errors).forEach(([key, value]) => {
          errorMessages += `${key}: ${value}\n`;
        });
alert(errorMessages);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
      });
  }
  return (
    <div className="container">
      <div className="card" style={styleCard}>
    <h3 className='text-center'>Login Form</h3>
    <Formik
          initialValues={{ email: '', password: ''}}
          validationSchema={Yup.object().shape({
            email: Yup.string().email('Invalid email').required('Email is required'),
            password: Yup.string().required('Password is required').min(6, 'Must be 6 digits or more'),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              // alert(JSON.stringify(values, null, 2));
              submitForm(JSON.stringify(values, null, 2));
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