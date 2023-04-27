import React from 'react'
function TotalAppCard(props) {
    return (

        // <div className="col-md-12 mx-3 my-1">
        //     <tbody>
        //         <tr>
        //             <td className='px-5'>{props.AppName2}</td>
        //         </tr>
        //     </tbody>
        // </div>

        <div class="card m-1" style={{ width: "18rem" }}>

            <ul class="list-group list-group-flush ">
                <li class="list-group-item"> {props.AppName2}</li>
            </ul>

        </div>
    );
}

export default TotalAppCard;
