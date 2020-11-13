import React, {useState, useEffect} from 'react';
import Contact_short from './Contact_short.jsx';
import Contact_info from './Contact_info.jsx'
//* wrap for contacts
const Contact = ({data}) => {
	//* useStates for index in Contact_short and for the data in Contact info
	const [index, setIndex] = React.useState(0)
	const [currentData, setCurrentData] = React.useState(0)
	//* If we have changes in Contact_info change previous data and upload in localStorage
	if(currentData){
		data[data[index].id] = currentData
		localStorage.setItem('contacts', JSON.stringify(data));
		setCurrentData(0)
		console.log(currentData);
	}
	//* Transfer persons in Contact_short and transfer one person in Contact_info
	return (
		<section className="contacts__item item-contact">
			<div className="item-contact__short contact-short">
			{data.map((item) => {
				return <Contact_short key={item.id} {...item} index={setIndex}></Contact_short> 
			})}
			</div>
			<div className="item-contact__info contact-info">
				<Contact_info data={data[index]} current_data={setCurrentData}/>
			</div>
		</section>
		
		
	)
	
}
export default Contact;