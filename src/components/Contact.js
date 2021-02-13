import { useEffect, useState } from 'react';
import './contact.css';

function Contact({ name, surname, phone, isdeleted, id }) {
	const [ del, setDel ] = useState(isdeleted);

	useEffect(() => {
		const btn = document.getElementById(id);
		const div = btn.parentElement;
		if (del === true) {
			div.style.textDecorationLine = 'line-through';
		}
	}, []);

	const onClick = (e) => {
		console.log(e);
		const btn = e.target;
		const div = btn.parentElement;
    let isDeleted = false;
		if (del === false) {
			setDel(true);
      isDeleted =true;
			div.style.textDecorationLine = 'line-through';
		} else {
			setDel(false);
      isDeleted =false;
			div.style.textDecorationLine = 'none';
		}
		deleteContact(btn.id,isDeleted);
	};

	const deleteContact = async (deletedid,deleted) => {
		const headers = {
			'Content-Type': 'application/json'
		};
    const info ={
      isDeleted: deleted
    }
    const data = JSON.stringify(info);
		const resp = await fetch('http://localhost:1337/contact-managers/' + deletedid, {
			method: 'PUT',
			headers: headers,
			body: data
		});
	};

	return (
		<div className="contact">
			<label className="lbl">
				 {name}   {surname}   {phone} 
			</label>
			<button id={id} className="btn-contact" onClick={onClick}>
				Delete
			</button>
		</div>
	);
}

export default Contact;
