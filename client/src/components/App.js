import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import Login from './Login';
import Dashborad from './Dashborad';

export default function App() {
	const [id, setId] = useLocalStorage();
	return id ? <Dashborad id={id} /> : <Login onIdSubmit={setId} />;
}
