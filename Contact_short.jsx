import React from 'react';
//* Take props
const Contact_short = ({  name, avatar, email, index, id }) => {
//* Define id of contact and when click button take id back in Contact
	const indexOf = () => {
		return index(id)
	}
	return (
		<section className="contact-short__item" onClick={indexOf}>
			<img className="contact-short__photo photo" src={avatar} alt={name} />
			<div className="contact-short__wrapper">
				<p className="contact-short__name">{name}</p>
				<p className="contact-short__email">{email}</p>
			</div>
		</section>
	)
}
export default Contact_short;