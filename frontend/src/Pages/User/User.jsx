import React, { useState, useEffect } from "react";
import axios from "axios";
import PatientProfiles from "../../Components/PatientProfiles/PatientProfiles";
import './User.css'

const User = () => {
  const [patientsData, setPatientsData] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:4000/getPatientsData");
    setPatientsData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='User-info-container'>
        <div className="user-info-left">
            <div className="profile-pic"></div>
            <h3>Dr.Sahil</h3>
            <h3 style={{color:"gray"}}>Qualifications..</h3>
        </div>
        <div className="user-info-right">
            <h2 style={{textAlign:"center"}}>My patient's profiles</h2>
            <div className="patient-container">
                <PatientProfiles list={patientsData}/>
            </div>
        </div>
    </div>
  )
}

export default User






