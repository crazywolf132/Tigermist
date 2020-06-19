import React, { useEffect, useState, useContext } from 'react';
import AppContext from '../../context/AppContext';
import { Navbar, Searchbar, List, Movie } from '../../components';
import Axios from 'axios';
import Jungla from '@jungla/language';
import useLocalStorage from '../../handlers/useLocalStorage';
import { ToastContainer, toast } from 'react-toastify';
import _ from 'lodash';
import 'react-toastify/dist/ReactToastify.css';

export default function SearchScreen() {
	// Getting the dispatcher, so we can change the page we are on.
	const { dispatch } = useContext(AppContext);

	/**
	 * Creating states that will be used throughout this page.
	 */
	const [searchValue, setSearchValue] = useState('');
	const [searchMovies, setMovies] = useState([]);
	const [isLoaded, setLoaded] = useState(false);
	const [watchList, setWatchlist] = useLocalStorage('watchList', []);

	/**
	 * Creating our change listener. This will get called whenever the search value changes.
	 */
	useEffect(() => {
		if (searchValue !== '') {
			performSearch();
		}
	}, [searchValue]);

	/**
	 * Used to get the movie using the omdbapi with the apikey.
	 */
	async function performSearch() {
		// I have committed this key... because it is an open key, and I will not be billed for it...
		// therefor, I don't really care.
		let results = await Axios.get(
			`http://www.omdbapi.com/?apikey=70c3ecea&t=${searchValue}`
		);

		// Using https://crazywolf132.github.com/Jungla to change the resulting data.
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

		// Adding the movie to the screen
		setMovies([data]);

		// Changing status to loaded... so we can see the movie.
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
			<ToastContainer />
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
										toast('🙌 Movie added to watch list', {
											position: 'top-right',
											autoClose: 2250,
											hideProgressBar: true,
											closeOnClick: true,
											pauseOnHover: true,
											draggable: false,
											progress: undefined,
										});
										setWatchlist(
											_.uniq([...watchList, movieItem])
										);
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
