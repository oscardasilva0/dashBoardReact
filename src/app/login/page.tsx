// `app/page.tsx` is the UI for the `/` URL
'use client';
import './style.css';
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";


// export default function Page() {
//   <Formik
//     initialValues={{ email: "", password: "" }}
//     onSubmit={(values, { setSubmitting }) => {
//       setTimeout(() => {
//         console.log("Loggin in", values);
//         setSubmitting(false);
//       }, 500);
//     }}
//     validationSchema={Yup.object().shape({
//       email: Yup.string()
//         .email()
//         .required("Required"),
//       password: Yup.string()
//         .required("No password provided.")
//         .min(8, "Password is too short - should be 8 chars minimum.")
//         .matches(/(?=.*[0-9])/, "Password must contain a number.")
//     })}
//   >

//     {props => {
//       const {
//         values,
//         touched,
//         errors,
//         isSubmitting,
//         handleChange,
//         handleBlur,
//         handleSubmit
//       } = props;

//       return (
//         <form onSubmit={handleSubmit}>
//           <label htmlFor='email'>Email</label>
//           <input
//             id='email'
//             name='email'
//             type='text'
//             placeholder='Enter your email'
//             value={values.email}
//             onChange={handleChange}
//             onBlur={handleBlur}
//           // className={errors.email && touched.email && "error"}
//           />
//           {errors.email && touched.email && (
//             <div className="input-feedback">{errors.email}</div>
//           )}

//           <label htmlFor='password'>Password</label>
//           <input
//             id='password'
//             name='password'
//             type='password'
//             placeholder='Enter yout password'
//             value={values.password}
//             onChange={handleChange}
//             onBlur={handleBlur}
//           // className={errors.password && touched.password && "error"}
//           />
//           {errors.password && touched.password && (
//             <div className="input-feedback">{errors.password}</div>
//           )}

//           <button type='submit'>
//             Login
//           </button>
//         </form>
//       );
//     }}
//   </Formik>
// }


export default function Page() {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values, { setSubmitting }) => {
        postData(JSON.stringify(values));
        setTimeout(() => {
          console.log(values);
          setSubmitting(false);
        }, 500);
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email()
          .required("Required"),
        password: Yup.string()
          .required("No password provided.")
          .min(8, "Password is too short - should be 8 chars minimum.")
          .matches(/(?=.*[0-9])/, "Password must contain a number.")
      })}
  >
      {props => (
        <form onSubmit={props.handleSubmit}>
          <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>

          <div className="signin">

            <div className="content">

              <h2>Sign In</h2>

              <div className="form">

                <div className="inputBox">

                 <input
                    id='email'
                    name="email"
                    type='text'
                    value={props.values.email}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    className={props.errors.email && "error"}
                    required
                    />
                    <i>E-mail</i>
                  {props.errors.email &&(
                    <div className="input-feedback">{props.errors.email}</div>
                  )} 

                </div>

                <div className="inputBox">
                  
                  <input
                    id='password'
                    name="password"
                    type='password'
                    value={props.values.password}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    className={props.errors.password && "error"}
                    required
                  />
                  <i>Password</i>
                  {props.errors.email &&(
                    <div className="input-feedback">{props.errors.password}</div>
                  )}

                </div>

                <div className="links"> <a href="#">Forgot Password</a> <a href="#">Signup</a>

                </div>

                <div className="inputBox">

                  <input type="submit" value="Login" />

                </div>

              </div>

            </div>

          </div>

        </form>
      

      )}
    </Formik>
  );
};
const postData = async(query)=>{
  let res = await fetch("https://reqres.in/api/login",{
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: query,
  })
  let data = await res.json()
  console.log(data)
};