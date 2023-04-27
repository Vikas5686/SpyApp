import React from 'react'
function ContactCard(props) {
  return (
   
    // <div className="col-md-12 mx-3 my-1">
    //       <tbody>
    //         <tr>
    //           <td className='px-5'>{props.Name}</td>
    //           <td className='px-5'>{props.Number}</td>
    //         </tr>
    //       </tbody>
    //     </div>

    <div class="card m-1" style={{ width: "18rem" }}>

    <ul class="list-group list-group-flush ">
        <li class="list-group-item"> {props.Name||"Name :Loading.."}</li>
        <li class="list-group-item">MObile NO : {props.Number}</li>
    </ul>

</div>
  );
}

export default ContactCard;
