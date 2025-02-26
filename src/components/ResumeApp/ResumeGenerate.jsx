import React from "react";
import { useFormik } from "formik";
import styles from "./resume.module.css";

function ResumeGenerate({ setData }) {
  const { handleChange, handleSubmit, values, errors } = useFormik({
    initialValues: {
      full_name: "",
      email: "",
      phone: "",
      address: "",
      image_url: "",
      skills: "",
      hobbies: "",
    },
    onSubmit: creatResume,
  });
  function creatResume(payload, options) {
    console.log("payload", payload);

    setData(payload);
  }

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
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="text"
          name="phone"
          value={values.phone}
          onChange={handleChange}
          placeholder="Phone"
        />
        <input
          type="text"
          name="address"
          value={values.address}
          onChange={handleChange}
          placeholder="Address"
        />
        <input
          type="text"
          name="image_url"
          value={values.image_url}
          onChange={handleChange}
          placeholder="image_url"
        />
        <input
          type="text"
          name="skills"
          value={values.skills}
          onChange={handleChange}
          placeholder="Skills"
        />

        <button type="submit">Generate Resume</button>
      </form>
    </div>
  );
}

export default ResumeGenerate;
