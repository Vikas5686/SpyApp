import React from 'react'
import CallLogsCard from './CallLogsCard'
function CallLogs(props) {

  console.log(props.datafectchedCallogs + "jdfkj")
  return (
      <div className="row Center my-1">
       
        
        {props.datafectchedCallogs.map((element)=>{
         return <CallLogsCard Number={element.Mobile} Time={element.Date} duration={element.Duration} /> ;
        //  return <Massagelist title={"title"} massage={"massage"}/>;
      })}

      </div>
  );
}

export default CallLogs;
