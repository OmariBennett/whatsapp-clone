import React, { useState } from 'react';
import Login from './Login';

export default function App() {
	const [id, setId] = useState();
	return (
		<>
			{id}
			<Login onIdSubmit={setId} />
		</>
	);
}
