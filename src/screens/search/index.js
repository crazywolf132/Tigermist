import React, { useEffect, useState, useContext } from 'react';
import AppContext from '../../context/AppContext';
import { Navbar, Searchbar, List, Movie } from '../../components';
import Axios from 'axios';
import Jungla from '@jungla/language';
import useLocalStorage from '../../handlers/useLocalStorage';

export default function SearchScreen() {
	const { dispatch } = useContext(AppContext);

	const [searchValue, setSearchValue] = useState('');
	const [searchMovies, setMovies] = useState([]);
	const [isLoaded, setLoaded] = useState(false);
	const [watchList, setWatchlist] = useLocalStorage('watchList', []);

	useEffect(() => {
		if (searchValue !== '') {
			performSearch();
		}
	}, [searchValue]);

	async function performSearch() {
		let results = await Axios.get(
			`http://www.omdbapi.com/?apikey=70c3ecea&t=${searchValue}`
		);

		let data = Jungla(
			`{
			Poster,
			Title,
			Runtime,
			Genre,
			imdbID as ID
		}`,
			results.data
		);

		setMovies([data]);

		setLoaded(true);
	}

	return (
		<>
			<Navbar
				items={[
					{
						title: 'Watch List',
						active: false,
						callBack: () => {
							dispatch({
								type: 'CHANGE_SCREEN',
								value: 0,
							});
						},
					},
					{
						title: 'Search',
						active: true,
					},
				]}
			/>
			<Searchbar
				style={{ margin: '20px auto' }}
				callBack={(value) => setSearchValue(value)}
			/>
			{!isLoaded && searchValue !== '' && (
				<h1
					style={{
						textAlign: 'center',
						justifyContent: 'center',
						alignItems: 'center',
						fontSize: 36,
						fontWeight: 600,
					}}>
					Please wait...
				</h1>
			)}
			{isLoaded && (
				<List style={{ marginTop: '40px', marginLeft: '22px' }}>
					{searchMovies.map((movieItem) => (
						<Movie
							img={movieItem.Poster || ''}
							title={movieItem.Title}
							genre={movieItem.Genre}
							time={movieItem.Runtime}
							hoverButtons={[
								{
									style: {
										marginTop: '12px',
										backgroundColor: '#171d33',
										borderRadius: '10px',
										padding: '8px',
										color: 'white',
									},
									title: 'Add to watch list',
									callBack: () => {
										setWatchlist([...watchList, movieItem]);
									},
								},
							]}
						/>
					))}
				</List>
			)}
		</>
	);
}
