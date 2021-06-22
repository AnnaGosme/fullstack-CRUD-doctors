import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [lastname, setLastName] = useState("");
  const [firstname, setFirstName] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [grade, setGrade] = useState(0);
  const [disability, setDisability] = useState(false);

  const [doctorList, setDoctorList] = useState([]);
  // const displayInfo = () => {
  //   console.log(lastname + firstname + speciality + grade + disability)
  // }

  const addDoctor = () => {
    console.log(lastname);
    axios
      .post("http://localhost:3001/doctors/new", {
        lastname,
        firstname,
        speciality,
        grade,
        disability,
      })
      .then(() => {
        console.log("sucess adding");
      });
  };

  const getDoctors = () => {
    axios.get("http://localhost:3001/doctors/all").then((response) => {
      setDoctorList(response.data);
    });
  };

  return (
    <div className="info-form">
      <label>Last Name</label>
      <input
        type="text"
        onChange={(event) => {
          setLastName(event.target.value);
        }}
      ></input>
      <label>First Name</label>
      <input
        type="text"
        onChange={(event) => {
          setFirstName(event.target.value);
        }}
      ></input>
      <label>Speciality</label>
      <input
        type="text"
        onChange={(event) => {
          setSpeciality(event.target.value);
        }}
      ></input>
      <label>Grade</label>
      <input
        type="text"
        onChange={(event) => {
          setGrade(event.target.value);
        }}
      ></input>
      <label>Disability</label>
      <input
        type="checkbox"
        onClick={(event) => {
          setDisability(!disability);
        }}
      ></input>
      <button
        //  onClick={}
        onClick={addDoctor}
      >
        Add doctor to database
      </button>
      <br></br>
      <div className="doctors">
        <button onClick={getDoctors}>Show all doctors</button>
        {doctorList.map((value, key) => {
          return (
            <div className="doctor-card">
              {`
              id: ${value.doctor_id},
          Last name: ${value.lastname},
          First name: ${value.firstname}, 
          Speciality: ${value.speciality},  
          Grade: ${value.grade}, 
          Disability: ${value.disability}
          `}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
