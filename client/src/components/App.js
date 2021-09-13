import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import Login from './Login';

export default function App() {
	const [id, setId] = useLocalStorage();
	return (
		<>
			{id}
			<Login onIdSubmit={setId} />
		</>
	);
}
