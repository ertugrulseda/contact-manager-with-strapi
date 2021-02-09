import { useState, React, useEffect } from 'react';
import './App.css';
import Contact from './components/Contact';
import ContactEntry from './components/ContactEntry';

function App() {
	let contactInfo = {
		Name: '',
		Surname: '',
		Phone: '',
		Deleted: false
	};

	const [ contactList, setcontactList ] = useState([]);

	useEffect(() => {
		fetchContacts();
	}, []);

	const fetchContacts = async () => {
		const resp = await fetch('http://localhost:1337/contact-managers/');
		const jsonData = await resp.json();
		for (let index = 0; index < jsonData.length; index++) {
			const item = jsonData[index];
			contactInfo.Name = item.name;
			contactInfo.Surname = item.surname;
			contactInfo.Phone = item.phone;
			contactInfo.Deleted = item.isDeleted;
			setcontactList([ ...contactList, contactInfo ]);
		}
	};

	const addContact = async (contactInfo) => {
		const newContact = {
			name: contactInfo.Name,
			surname: contactInfo.Surname,
			phone: contactInfo.Phone,
			isDeleted: contactInfo.Deleted
		};
		const headers = {
			'Content-Type': 'application/json',
		  };
		const data = JSON.stringify(newContact);
		console.log(data);
	   const resp = await fetch('http://localhost:1337/contact-managers/', {
			method: 'POST',
			headers: headers,
			body: data
		});
		fetchContacts();
	};

	const onClickPhoneHandle = (phone) => {
		contactInfo.Phone = phone;
		addContact(contactInfo);
		setcontactList([ ...contactList, contactInfo ]);
	};
	const onClickSurnameHandle = (surname) => {
		contactInfo.Surname = surname;
	};

	const onClickNameHandle = (name) => {
		contactInfo.Name = name;
	};

	return (
		<div className="App">
			<h1 className="title">Contact Manager</h1>
			<ContactEntry
				onClickNameHandle={onClickNameHandle}
				onClickSurnameHandle={onClickSurnameHandle}
				onClickPhoneHandle={onClickPhoneHandle}
			/>
			<div className="list-wrapper">
				<ul className="list">
					{contactList.map((item, index) => {
						return (
							<li className="list-item" key={index}>
								<Contact name={item.Name} surname={item.Surname} phone={item.Phone} isdeleted={item.Deleted} />
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}
export default App;
