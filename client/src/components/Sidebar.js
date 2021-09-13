import React, { useState } from 'react';
import { Tab, Nav } from 'react-bootstrap';
import Conversations from './Conversations';
import Contacts from './Contacts';

const CONSVERSATION_KEY = 'conversations';
const CONTACTS_KEY = 'contacts';

export default function Sidebar({ id }) {
	const [activeKey, setActiveKey] = useState(CONSVERSATION_KEY);
	return (
		<div style={{ width: '250px' }} className='d-flex flex-column'>
			<Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
				<Nav variant='tabs' className='justify-content-center'>
					<Nav.Item>
						<Nav.Link eventKey={CONSVERSATION_KEY}>Conversations</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
					</Nav.Item>
				</Nav>
				<Tab.Content>
					<Tab.Pane eventKey={CONSVERSATION_KEY}>
						<Conversations />
					</Tab.Pane>
					<Tab.Pane eventKey={CONTACTS_KEY}>
						<Contacts />
					</Tab.Pane>
				</Tab.Content>
			</Tab.Container>
		</div>
	);
}
