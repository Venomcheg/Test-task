import React, { useState } from 'react';
import { BiStar } from 'react-icons/bi'
//* Take props
const Contact_info = ({ data, current_data }) => {
	const { id, name, website, avatar, favorite, username, email, phone, address } = data
	//* Set props in person useState
	const [person, setPerson] = useState({ id,name, website, avatar, favorite, username, email, phone, address});
	//* Take state of edit if false we can't see edit popup, if true we can see edit popup
	const [edit, setEdit] = useState(false)
	//* Change person information after change inputs
	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setPerson({...person, [name]: value})
	}
	//* When we click the form button we take new data from localstorage
	const editContact = () => {
		setPerson({ id,name, website, avatar, favorite, username, email, phone, address})
		setEdit(true)
	}
	//* If we don't want to safe data click Cancel
		const Cancel = () => {
		setEdit(false)
	}
	//* If we click OK our data is saved
	const saveContact = (e) => {
		e.preventDefault();
		current_data(person);
		setEdit(false)
	}
	//* Edit form for contact
	if (edit) {
	return (
		<div className="item-edit">
		<form className="contact-info__item-edit item-edit__form" onSubmit={saveContact}>
			
<img className="item-edit__photo photo" src={avatar} alt={name} />
			<div className="item-edit__wrap">
			<label htmlFor="name">name</label>
			<input type="text" className="item-edit__item" id="name" name="name" value={person.name} onChange={handleChange}/>
			</div>

						<div className="item-edit__wrap">
			<label htmlFor="username">username</label>
			<input type="text" className="item-edit__item" id="username" name="username" value={person.username} onChange={handleChange}/>
			</div>
									<div className="item-edit__wrap">
			<label htmlFor="website">website</label>
			<input type="text" className="item-edit__item" id="website" name="website" value={person.website} onChange={handleChange}/>
			</div>
									<div className="item-edit__wrap">
			<label htmlFor="email">email</label>
			<input type="text" className="item-edit__item" id="email" name="email" value={person.email} onChange={handleChange}/>
			</div>
									<div className="item-edit__wrap">
			<label htmlFor="phone">phone</label>
			<input type="phone" className="item-edit__item" id="phone" name="phone" value={person.phone} onChange={handleChange}/>
			</div>
												<div className="item-edit__wrap">
			<label htmlFor="place">country</label>
			<input type="text" className="item-edit__item" id="place" name="place" value={person.address.country} onChange={handleChange}/>
			</div>
															<div className="item-edit__wrap">
			<label htmlFor="place">city</label>
			<input type="text" className="item-edit__item" id="place" name="place" value={person.address.city} onChange={handleChange}/>
			</div>
												<div className="item-edit__wrap">
			<label htmlFor="address">address</label>
			<input type="text" className="item-edit__item" id="address" name="address" value={person.address.state,person.address.streetA,person.address.streetB, person.address.streetC, person.address.streetD} onChange={handleChange}/>
			</div>
			<div className="btn__wrap">
				<button className="btn" type="submit">OK</button>
				<button className="btn" onClick={Cancel} >Cancel</button>
			</div>

		</form>
		</div>
	)
	}
	//* First screen of contact_info
		return (
			<section className="contact-info__item">
				<div>
					<div className="contact-info__top-block">
						<img className="contact-info__photo photo" src={avatar} alt={name} />
						<p className="contact-info__name" >{name}</p>
						{favorite ? <BiStar className="favorite" /> : ""}
					</div>
					<p className="contact-info__email contact-info__point" ><span className="contact-info__title">username</span> <span className="contact-info__text">{username}</span></p>
					<p className="contact-info__email contact-info__point" ><span className="contact-info__title">website</span> <span className="contact-info__text">{website}</span> </p>
					<p className="contact-info__email contact-info__point" ><span className="contact-info__title">email</span>  <span className="contact-info__text">{email}</span> </p>
					<p className="contact-info__email contact-info__point" ><span className="contact-info__title">phone</span> <span className="contact-info__text">{phone}</span> </p>
					<p className="contact-info__email contact-info__point" ><span className="contact-info__title">country, city</span> <span className="contact-info__text">{address.country}, {address.city}</span> </p>
					<p className="contact-info__email contact-info__point" ><span className="contact-info__title">address</span> <span className="contact-info__text">{address.state}, {address.streetA}, {address.streetB}, {address.streetC}, {address.streetD}</span> </p>
					<button className="btn" type="button" onClick={editContact}>Edit</button>
				</div>
			</section>
		)
}
export default Contact_info;