import React from 'react'
import  TotalAppCard  from "./TotalAppitem";
function TotalApp(props) {
  return (
    <div className="row Center my-1">
      
      {props.datafectchedApp.map((element)=>{
       return <TotalAppCard  AppName2={element.AppName} /> ;
    })}

    </div>
  );
}

export default TotalApp;
