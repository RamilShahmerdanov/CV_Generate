import React, { useEffect } from "react";
import { useFormik } from "formik";
import styles from "./resume.module.css";
import { isValidEmail, isValidName } from "../../utils/regex";

function ResumeGenerate({ setData, data, setSelectedCV }) {
  const { handleChange, handleSubmit, values, errors, touched } = useFormik({
    initialValues: {
      full_name: "",
      email: "",
      phone: "",
      address: "",
      image_url: "",
      skills: "",
      hobbies: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.full_name) {
        errors.full_name = "Required";
      } else if (!isValidName(values.full_name)) {
        errors.full_name = "Invalid Name";
      }
      if (!values.email) {
        errors.email = "Required";
      } else if (!isValidEmail(values.email)) {
        errors.email = "Invalid Email";
      }
      if (!values.phone) {
        errors.phone = "Required";
      }
      if (!values.address) {
        errors.address = "Required";
      }
      if (!values.image_url) {
        errors.image_url = "Required";
      }
      if (!values.skills) {
        errors.skills = "Required";
      }
      return errors;
    },
    onSubmit: creatResume,
  });

  function creatResume(values, { resetForm }) {
    const newData = [values, ...data];
    setData(newData);
    setSelectedCV(values);  // Həmin CV göstərilsin
    localStorage.setItem("savedData", JSON.stringify(newData));
    resetForm();
  }

  useEffect(() => {
    const savedData = localStorage.getItem("savedData");
    setData(savedData ? JSON.parse(savedData) : []);
  }, []);

  useEffect(() => {
    localStorage.setItem("savedData", JSON.stringify(data));
  }, [data]);

  return (
    <div className={styles.formcontainer}>
      <h2>CV Form</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="full_name"
          value={values.full_name}
          onChange={handleChange}
          placeholder="Full Name"
        />
        {touched.full_name && errors.full_name ? (
          <p className={styles.error}>{errors.full_name}</p>
        ) : null}

        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="Email"
        />
        {touched.email && errors.email ? (
          <p className={styles.error}>{errors.email}</p>
        ) : null}

        <input
          type="text"
          name="phone"
          value={values.phone}
          onChange={handleChange}
          placeholder="Phone"
        />
        {touched.phone && errors.phone ? (
          <p className={styles.error}>{errors.phone}</p>
        ) : null}

        <input
          type="text"
          name="address"
          value={values.address}
          onChange={handleChange}
          placeholder="Address"
        />
        {touched.address && errors.address ? (
          <p className={styles.error}>{errors.address}</p>
        ) : null}

        <input
          type="text"
          name="image_url"
          value={values.image_url}
          onChange={handleChange}
          placeholder="Image URL"
        />
        {touched.image_url && errors.image_url ? (
          <p className={styles.error}>{errors.image_url}</p>
        ) : null}

        <input
          type="text"
          name="skills"
          value={values.skills}
          onChange={handleChange}
          placeholder="Skills"
        />
        {touched.skills && errors.skills ? (
          <p className={styles.error}>{errors.skills}</p>
        ) : null}

        <button type="submit">Generate Resume</button>
      </form>
    </div>
  );
}

export default ResumeGenerate;
