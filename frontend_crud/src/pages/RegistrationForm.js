import React from "react"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import http from "../http";

export function RegistrationForm() {
  const navigate  = useNavigate();
  //const [inputs, setInputs] = useState({});
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
    http.post('auth/register', inputs)
      .then((res) => {
        navigate('/');
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
    // alert(values);
  return (
    <div className="container">
      <div className="card" style={styleCard}>
        <h3 className="text-center">Registration Form</h3>

        <Formik
          initialValues={{name: "",email: "", password: "", confirmPassword: "" }}
          validationSchema={Yup.object().shape({
            name: Yup.string().required('Name is required'),
            email: Yup.string().email('Invalid email').required('Email is required'),
            password: Yup.string().required('Password is required'),
            confirmPassword: Yup.string()
              .oneOf([Yup.ref('password'), null], 'Passwords must match')
              .required('Confirm Password is required'),
          })}
          onSubmit={(values, { setSubmitting }) => {
            // setTimeout(() => {
            //   alert(JSON.stringify(values, null, 2));
              submitForm(JSON.stringify(values, null, 2));
              setSubmitting(false);
            // }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form style={formCard}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <Field type="text" name="name" className="form-control"   />
                <ErrorMessage name="name" component="div" className="text-danger" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <Field type="email" name="email" className="form-control"  />
                <ErrorMessage name="email" component="div" className="text-danger" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field type="password" name="password" className="form-control"  />
                <ErrorMessage name="password" component="div" className="text-danger" />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <Field type="password" name="confirmPassword" className="form-control"  />
                <ErrorMessage name="confirmPassword" component="div" className="text-danger" />
              </div>
              <button style={{marginTop:"10px"}}type="submit" onSubmit={submitForm} className="btn btn-primary" disabled={isSubmitting}>
                Submit
              </button>
              <br></br>
              <span style={{color:'black', fontFamily:'serif'}}>
              Already having account?
              <Link to='/'> Click here to Login</Link> <span>&#128512;</span>
              </span>
              <br></br>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
