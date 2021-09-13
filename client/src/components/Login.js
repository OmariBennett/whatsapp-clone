import React, { useRef } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { v4 as uuidvV4 } from 'uuid';

export default function Login({ onIdSubmit }) {
	const idRef = useRef();

	function handleSubmit(e) {
		e.preventDefault();
		onIdSubmit(idRef.current.value);
	}

	function createNewId() {
		onIdSubmit(uuidvV4());
	}

	return (
		<Container
			className='align-items-center d-flex'
			style={{ height: '100vh' }}>
			<Form className='w-100' onSubmit={handleSubmit}>
				<Form.Group>
					<Form.Label>Enter Your Id</Form.Label>
					<Form.Control type='text' ref={idRef} required />
				</Form.Group>
				<Button type='submit' style={{ marginRight: '.7em' }}>
					Login
				</Button>
				<Button variant='secondary' onClick={createNewId}>
					Create A New Id
				</Button>
			</Form>
		</Container>
	);
}
