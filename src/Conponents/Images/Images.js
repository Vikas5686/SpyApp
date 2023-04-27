import React from 'react'
import ImageCard from './imageCard';

function Images(props) {
  return (
    <div className="row Center my-1">
  
      
      {props.datafectchedImages.map((element)=>{
       return <ImageCard  Id={element.Id} Name={element.Name} Data={element.Data} /> ;
    })}

    </div>
  );
}

export default Images;
