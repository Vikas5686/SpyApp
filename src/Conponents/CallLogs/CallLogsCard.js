import React from 'react'
function CallLogsCard(props) {
  return (
   
    // <div className="col-md-12 mx-3 my-1">
    //       <tbody>
    //         <tr>
    //           <td className='px-5'>NotAccessed</td>
    //           <td className='px-5'>{props.Number}</td>
    //           <td className='px-5'>{props.duration||"2 min"}</td>
    //           <td className='px-5'>{props.Time||"2:30 PM"}</td>
    //         </tr>
    //       </tbody>
    //     </div>

    <div class="card m-1" style={{ width: "18rem" }}>

    <ul class="list-group list-group-flush ">
        <li class="list-group-item"> {props.Name||"Name :Loading.."}</li>
        <li class="list-group-item">MObile NO : {props.Number}</li>
        <li class="list-group-item">Duration : {props.duration||"2 min"}</li>
        <li class="list-group-item">time : {props.Time||"2:30 PM"}</li>
    </ul>

</div>
  );
}

export default CallLogsCard;
