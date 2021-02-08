import { useEffect, useState } from 'react';
import './contact.css';

function Contact({ name, surname, phone, isdeleted }) {

  const [del,setDel] = useState(isdeleted);

  useEffect(()=>{
    const div = document.querySelector(".contact");
    if(del === 'true'){
      div.style.textDecorationLine = 'line-through';
    } 
  },[]);

	const onClick = () => {
    const div =  document.querySelector(".contact");
    if(del === 'false'){
      //api call
      setDel('true');
      div.style.textDecorationLine = 'line-through';
    } else{
      //api call
      setDel('false');
      div.style.textDecorationLine = 'none';
    }
	};

	return (
		<div  className="contact">
			<label className='lbl' >{name} {surname}  {phone}</label>
			<button className="btn-contact" onClick={onClick}>
				Delete
			</button>
		</div>
	);
}

export default Contact;
