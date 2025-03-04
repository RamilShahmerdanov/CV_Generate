import React from "react";
import styles from "./resume.module.css";
import { usePDF } from 'react-to-pdf';

function ResumePreview({ selectedCV }) {
  const { toPDF, targetRef } = usePDF({filename:  selectedCV?.full_name+'.pdf'});
  if (!selectedCV)
    return (
      <div className={styles.formprev}>
        <p>Submit the form to preview your CV here.</p>
      </div>
    );

  console.log("selectedCV", selectedCV);

  return (
    <>

      <div ref={targetRef} className={`${styles.formpreview} ${styles.pdfContainer}`}>
        <div className={styles.preview}>
          <div>
            <p>
              <p>Full name </p>
              {selectedCV?.full_name}
              <hr />
            </p>
            <p>
              {" "}
              <p>Email</p>
              {selectedCV?.email}
            </p>
            <hr />

            <p>
              <p>Phone:</p>
              {selectedCV?.phone}
            </p>
            <hr />

            <p>
              <p>Adress</p>
              {selectedCV?.address}
            </p>
            <hr />

            <p>
              <p>Skills</p>
              {selectedCV?.skills}
            </p>
            <hr />
          </div>

          <img width={200} height={200} src={selectedCV.image_url} alt="" />
        </div>
      </div>
      <button className={styles.btndwn} onClick={toPDF}>Download CV</button>

    </>
  );
}

export default ResumePreview;
