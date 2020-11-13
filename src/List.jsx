import React from 'react';
import Contact from './Contact.jsx';
const List = ({data}) => {
	return (
		<section className="contacts__list">
			<Contact data={data}/>
		</section>
	);
};
export default List;