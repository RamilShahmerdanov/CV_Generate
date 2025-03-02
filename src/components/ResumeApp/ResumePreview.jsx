import React from "react";
import styles from "./resume.module.css";

function ResumePreview({ selectedCV }) {
  if (!selectedCV) return <p style={{paddingLeft:"20%", fontSize:"25px", fontWeight:"600", color:"red"}}>No CV Added</p>;

  console.log("selectedCV", selectedCV);
  

  

  return (
    <div className={styles.formcontainer}>
      <h2>CV Preview</h2>
      <div className={styles.preview}>
        
        <img width={200} height={200} src={selectedCV.image_url} alt="" />
        <h3>{selectedCV.full_name}</h3>
        <p>{selectedCV.email}</p>
        <p>{selectedCV.phone}</p>
        <p>{selectedCV.address}</p>
        <p>{selectedCV.skills}</p>
      </div>
    </div>
  );
}

export default ResumePreview;
