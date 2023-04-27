import React from 'react'
import Massagelist from './MassageCards'

function Massages(props) {
  console.log("this is the data" + props.datafectched)
  let htmlString = `<div className="col-md-3  my-2">
<p>
  <a className="btn btn-dark" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    title
  </a>

</p>
<div className="collapse" id="collapseExample">
  <div className="card card-body">
    Massage
  </div>
</div>
</div>`;
  //  props.datafectched.forEach(element => {
  //   console.log("this is the data"+element.Title )
  //   html+=`<div className="col-md-3  my-2">
  //   <p>
  //     <a className="btn btn-dark" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  //       ${element.Title}
  //     </a>

  //   </p>
  //   <div className="collapse" id="collapseExample">
  //     <div className="card card-body">
  //       ${element.Massage}
  //     </div>
  //   </div>
  // </div>`
  //  });
  //  MassagesList.innerHTML=html;

  return (
    <div className="row mx-1 my-1 Center" id='MassagesList'>
      {props.datafectched.map((element)=>{
         return <Massagelist title={element.Title} massage={element.Massage}/>;
        //  return <Massagelist title={"title"} massage={"massage"}/>;
      })}
    </div>
  );
}

export default Massages;
