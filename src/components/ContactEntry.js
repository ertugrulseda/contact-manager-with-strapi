
import { useState } from 'react';
import './contactEntry.css';

function ContactEntry(props) {
  
 
    const [name,setName ]= useState('');
    const [surname,setSurname ]= useState('');
    const [phone,setPhone ]= useState('');
  
    const onChangeNameHandle = (e) =>{
      setName(e.target.value);
    };

    const onChangeSurnameHandle = (e) =>{
        setSurname(e.target.value);
      };

      const onChangePhoneHandle = (e) =>{
        setPhone(e.target.value);
      };
   
    const onClickHandle =(e)=>{
         if( name !== ''){
            props.onClickNameHandle(name);
            setName("");
         }
         if(surname !== ''){
            props.onClickSurnameHandle(surname);
            setSurname("");
         }
         if( phone !== ''){
            props.onClickPhoneHandle(phone);
            setPhone("");
         }
         e.preventDefault();
    }

	return (
		<div className="contactEntry">
			<input
				type="text"
				// id="name"
				onChange={onChangeNameHandle}
                placeholder="Name"
                value = {name}
				required
			/>
			<input
				type="text"
				id="surname"
				onChange={onChangeSurnameHandle}
                placeholder="Surname"
                value = {surname}
				required
			/>
			<input
				type="text"
				id="phone"
				onChange={onChangePhoneHandle}
                placeholder="Phone"
                value = {phone}
				required
			/>
			<button className="btn" onClick={onClickHandle}>
				{' '}
				Add New Contact
			</button>
		</div>
	);
}
export default ContactEntry;
