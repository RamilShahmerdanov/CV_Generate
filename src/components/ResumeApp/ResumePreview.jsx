import React from "react";
import styles from "./resume.module.css";

function ResumePreview({ data }) {
  console.log("data", data);

  return (
    <div className={styles.formcontainer}>
      <h2>CV Preview</h2>
      <div className={styles.preview}>
        <img width={200} height={200} src={data?.image_url} alt="" />
        <h3>{data?.full_name}</h3>
        <p>{data?.email}</p>
        <p>{data?.phone}</p>
        <p>{data?.address}</p>
        <p>{data?.skills}</p>
      </div>
    </div>
  );
}

export default ResumePreview;
