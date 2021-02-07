import { useEffect, useState } from 'react';

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
    }
	};

	return (
		<div  className="contact">
			<label id="name">{name}</label>
			<label id="surname">{surname}</label>
			<label id="phone">{phone}</label>
			{isdeleted}
			<button className="btn" onClick={onClick}>
				Delete
			</button>
		</div>
	);
}

export default Contact;
