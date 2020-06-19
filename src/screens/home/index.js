import React, { useEffect, useState, useContext } from 'react';
import AppContext from '../../context/AppContext';
import { Navbar, Movie, List } from '../../components';

export default function HomeScreen(props) {
	const { dispatch } = useContext(AppContext);
	return (
		<>
			<Navbar />
			<List style={{ marginLeft: '22px' }}>
				<Movie />
			</List>
		</>
	);
}
