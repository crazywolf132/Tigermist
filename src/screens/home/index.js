import React, { useEffect, useState, useContext } from 'react';
import AppContext from '../../context/AppContext';
import { Navbar, Movie, List } from '../../components';

export default function HomeScreen(props) {
	const { dispatch } = useContext(AppContext);
	return (
		<>
			<Navbar
				items={[
					{ title: 'Watch List', active: true },
					{
						title: 'Search',
						active: false,
						callBack: () => {
							dispatch({
								type: 'CHANGE_SCREEN',
								value: 1,
							});
						},
					},
				]}
			/>
		</>
	);
}
