import React from 'react';
import List from './List.jsx'
const Main = ({data}) => {
	//* transfer the data further || create wrap for contacts
	return (
		<section>
	<article className="container contacts">
		<div className="title">
			<h1>Contacts</h1>
			<List data={data}/>
		</div>
	</article>
</section>
	)
}
export default Main;