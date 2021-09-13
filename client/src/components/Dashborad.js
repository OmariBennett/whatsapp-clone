import React from 'react';
import Sidebar from './Sidebar';

export default function Dashborad({ id }) {
	return (
		<div className='d-flex' style={{ height: '100vh' }}>
			<Sidebar id={id} />
		</div>
	);
}
