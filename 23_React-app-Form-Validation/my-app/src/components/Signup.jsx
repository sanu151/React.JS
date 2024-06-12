import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function Signup() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Name must be atleast 2 character")
        .required("Required"),
      email: Yup.string().email().required("Required"),
      password: Yup.string()
        .min(6, "Password must be atleast 6 character")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const renderNameError = formik.touched.name && formik.errors.name && (
    <span className="errors">{formik.errors.name}</span>
  );

  const renderEmailError = formik.touched.email && formik.errors.email && (
    <span className="errors">{formik.errors.email}</span>
  );

  const renderPassowrdError = formik.touched.password &&
    formik.errors.password && (
      <span className="errors">{formik.errors.password}</span>
    );

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name">Name : </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <br />
          {renderNameError}
        </div>
        <div>
          <label htmlFor="email">Email : </label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <br />
          {renderEmailError}
        </div>
        <div>
          <label htmlFor="password">Password : </label>
          <input
            type="text"
            id="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <br />
          {renderPassowrdError}
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
