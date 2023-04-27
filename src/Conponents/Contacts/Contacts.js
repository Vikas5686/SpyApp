import React from 'react'
import ContactItem from './ContactItem'
function Contacts(props) {

  console.log(props.datafectchedContacts + "jdfkj")
  return (
      <div className="row Center  my-1">
        
        {props.datafectchedContacts.map((element)=>{
         return <ContactItem Number={element.Number} Name={element.Name} /> ;
        //  return <Massagelist title={"title"} massage={"massage"}/>;
      })}

      </div>
  );
}

export default Contacts;
