import React from 'react';
import { Navbar, Movie, List } from '../../components';

export default function HomeScreen(props) {
	return (
		<>
			<Navbar />
			<List style={{ marginLeft: '22px' }}>
				<Movie />
			</List>
		</>
	);
}
