import Table from "react-bootstrap/Table";
import styles from "./resume.module.css";
import ResumePreview from "./ResumePreview";
import { useState } from "react";

function ResumeShowTable({ data, setData, setSelectedCV }) {
  
  
  
  // const handleShow = (cv) => {
  //   setSelectedCV(cv);
  // }
  // console.log("selectedCV", selectedCV);
  
  const handleDelete = (index) => {
    const newData = data.filter((item, i) => i !== index);
    setData(newData);
    localStorage.setItem("savedData", JSON.stringify(newData));
  }
  return (
    <>
    <Table striped bordered hover className={styles.table}>
      <thead>
        <tr>
          <th>#</th>
          <th>Full Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Image</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.full_name}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>

            <td>
              <img
                className={styles.image}
                src={item.image_url || "https://via.placeholder.com/100"}
                alt=""
              />
            </td>
            <td>
              <button className={styles.btnshow} onClick={()=>setSelectedCV(item)}>Show CV</button>
              <button className={styles.btndel} onClick={() => handleDelete(index)}>Delete CV</button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
    {/* {selectedCV && <ResumePreview selectedCV={selectedCV} />} */}
    </>
  );
}

export default ResumeShowTable;
