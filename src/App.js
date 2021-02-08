import { useState, React } from 'react';
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

	const onClickPhoneHandle = (phone) => {
		contactInfo.Phone = phone;
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
								<Contact name={item.Name} surname={item.Surname} phone={item.Phone} isdeleted="false" />
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}
export default App;
