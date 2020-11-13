import React, { useState, useEffect } from 'react';
import Loading from './Loading.jsx';
import Main from './Main.jsx';
import Header from './header.jsx';
const url = 'http://demo.sibers.com/users';
function App() {
		//* Create states for loading screen and fetch data
		const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	//* fetchData from dataBase
	const fetchData = async () => {
		try {
			const response = await fetch(url)
			const data = await response.json()
			setLoading(false)
			setData(data)
		} catch (error) {
			setLoading(false)
			console.log(error)
		}
	}
	//* Deploy data only since first download
	useEffect(() => {
		fetchData();
	}, [])
	//* If we have loading set loading screen
	if (loading) {
		return (
			<main>
				<Loading />
			</main>
		)
	}
	//* If we don't have contacts, we can download new data
	if (data.length === 0) {
		return (
			<main>
				<div className='title'>
					<h2>no contacts left</h2>
					<button className='btn' onClick={() => fetchData()}>
						refresh
          </button>
				</div>
			</main>
		)
	}
	//* Launch data in localstorage for use later
	let result;
	if('contacts' in localStorage === false){
	localStorage.setItem('contacts', JSON.stringify(data));
	}
	result = JSON.parse(localStorage.getItem('contacts'));
	console.log(result);
	//* Next components
	return (
		<main>
			<Header />
			<Main data={result} />
		</main>
	)
}
export default App;