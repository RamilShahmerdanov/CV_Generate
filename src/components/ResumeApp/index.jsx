import React, { useState } from "react";
import ResumeGenerate from "./ResumeGenerate";
import ResumePreview from "./ResumePreview";
import ResumeShowTable from "./ResumeShow Table";
import styles from "./resume.module.css";

function ResumeApp() {
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("savedData");
    return savedData ? JSON.parse(savedData) : [];
  });
  const [selectedCV, setSelectedCV] = useState(null);

  return (
    <div className={styles.mainsite}>
      <div className={styles.resumecontainer}>
        <ResumeGenerate setData={setData} data={data} setSelectedCV={setSelectedCV} />
        <ResumePreview data={data} selectedCV={selectedCV} />
      </div>
      <div>
        <ResumeShowTable data={data} setData={setData} setSelectedCV={setSelectedCV} />
      </div>
    </div>
  );
}

export default ResumeApp;
