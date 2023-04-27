import React from 'react'
function ImageCard(props) {
    return (

        // <div className="col-md-12 mx-3 my-1">
        //     <tbody>
        //         <tr>
        //             <td className='px-5'>{props.Id}</td>
        //             <td className='px-5'>{props.Name}</td>
        //             <td className='px-5'>{props.Data}</td>
        //         </tr>
        //     </tbody>
        // </div>

        <div class="card m-3" style={{width: "18rem"}}>
              
                <ul class="list-group list-group-flush ">
                    <li class="list-group-item">fd{props.Id}</li>
                    <li class="list-group-item">df{props.Name}</li>
                    <li class="list-group-item">df{props.Data}</li>
                </ul>
              
        </div>
    );
}

export default ImageCard;
