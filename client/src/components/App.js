import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import Login from './Login';
import Dashborad from './Dashborad';
import { ContactsProvider } from '../contexts/ContactsProvider';

export default function App() {
	const [id, setId] = useLocalStorage();
	const dashborad = (
		<ContactsProvider>
			<Dashborad id={id} />
		</ContactsProvider>
	);
	return id ? dashborad : <Login onIdSubmit={setId} />;
}
