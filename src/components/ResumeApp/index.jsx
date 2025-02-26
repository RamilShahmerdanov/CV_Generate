import React, { useState } from "react";
import ResumeGenerate from "./ResumeGenerate";
import ResumePreview from "./ResumePreview";
import ResumeShowTable from "./ResumeShow Table";
import styles from "./resume.module.css";

function ResumeApp() {
  const [data, setData] = useState({
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqafzhnwwYzuOTjTlaYMeQ7hxQLy_Wq8dnQg&s",
  });
  return (
    <div>
      <div className={styles.resumecontainer}>
        <ResumeGenerate setData={setData} />
        <ResumePreview data={data} />
      </div>
      <div>
        <ResumeShowTable data={data} />
      </div>
    </div>
  );
}

export default ResumeApp;
