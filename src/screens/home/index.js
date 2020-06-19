import React, { useEffect, useState, useContext } from 'react';
import AppContext from '../../context/AppContext';
import { Navbar, Movie, List } from '../../components';
import useLocalStorage from '../../handlers/useLocalStorage';

export default function HomeScreen(props) {
	const { dispatch } = useContext(AppContext);
	const [watchList, setWatchList] = useLocalStorage('watchList', []);
	const [likes, setLikes] = useLocalStorage('likes', []);
	const [dislikes, setDislikes] = useLocalStorage('dislikes', []);
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
			{watchList.length === 0 && (
				<h1
					style={{
						marginTop: '10%',
						fontSize: 36,
						fontWeight: 600,
						textAlign: 'center',
						justifyContent: 'center',
						alignItems: 'Center',
					}}>
					Lets start by adding some movies!
				</h1>
			)}
		</>
	);
}
