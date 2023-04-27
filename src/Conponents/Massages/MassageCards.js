import React from 'react'
function MassageCard(props) {
    return (
        // <div className="col-md-3  my-2">
        //     <p>
        //         <a className="btn btn-dark"  href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
        //            ${props.title}
        //           {/* <h1>title</h1>  */}
        //         </a>

        //     </p>
        //     <div id="collapseExample">
        //         <div className="card card-body">
        //         ${props.massage}
        //          {/* <h1>Massage</h1> */}
        //         </div>
        //     </div>
        // </div>

        <div class="card m-1" style={{ width: "18rem" }}>

            <ul class="list-group list-group-flush ">
                <li class="list-group-item"> ${props.title}</li>
                <li class="list-group-item"> ${props.massage}</li>
            </ul>

        </div>
    );
}

export default MassageCard;
