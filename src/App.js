import { useState, React, useEffect } from 'react';
import './App.css';
import Contact from './components/Contact';
import ContactEntry from './components/ContactEntry';

function App() {
	let contactInfo = {
		id: -1,
		name: '',
		surname: '',
		phone: '',
		isDeleted: false
	};

	const [ contactList, setcontactList ] = useState([]);

	useEffect(() => {
		fetchContacts();
	}, []);

	const fetchContacts = async () => {
		const resp = await fetch('http://localhost:1337/contact-managers/');
		const jsonData = await resp.json();
		setcontactList(jsonData);
	};

	const addContact = async (contactInfo) => {
		const headers = {
			'Content-Type': 'application/json'
		};
		const data = JSON.stringify(contactInfo);
		const resp = await fetch('http://localhost:1337/contact-managers/', {
			method: 'POST',
			headers: headers,
			body: data
		});

		fetchContacts();
	};

	const onClickPhoneHandle = (phone) => {
		contactInfo.phone = phone;
		addContact(contactInfo);
	};
	const onClickSurnameHandle = (surname) => {
		contactInfo.surname = surname;
	};

	const onClickNameHandle = (name) => {
		contactInfo.name = name;
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
					{contactList.map((item) => {
						return (
							<li className="list-item" key={item.id}>
								<Contact
									name={item.name}
									surname={item.surname}
									phone={item.phone}
									isdeleted={item.isDeleted}
									id={item.id}
								/>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}
export default App;
