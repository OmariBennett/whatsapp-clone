import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import Login from './Login';
import Dashborad from './Dashborad';
import { ContactsProvider } from '../contexts/ContactsProvider';
import { ConversationsProvider } from '../contexts/ConversationsProvider';

export default function App() {
	const [id, setId] = useLocalStorage();
	const dashborad = (
		<ContactsProvider>
			<ConversationsProvider>
				<Dashborad id={id} />
			</ConversationsProvider>
		</ContactsProvider>
	);
	return id ? dashborad : <Login onIdSubmit={setId} />;
}
