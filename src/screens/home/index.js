import React, { useEffect, useState, useContext } from 'react';
import AppContext from '../../context/AppContext';
import { Navbar, Movie, List } from '../../components';
import { Title } from './style';
import useLocalStorage from '../../handlers/useLocalStorage';
import _ from 'lodash';

export default function HomeScreen(props) {
	const { dispatch } = useContext(AppContext);

	const [watchList, setWatchList] = useLocalStorage('watchList', []);
	const [likes, setLikes] = useLocalStorage('likes', []);
	const [dislikes, setDislikes] = useLocalStorage('dislikes', []);

	const changeLikeDislikeStatus = (movie, liked = true) => {
		if (!liked) {
			// Going to remove it from the liked list... if it is there.
			setLikes(likes.filter((likedMovie) => likedMovie.ID != movie.ID));
			setDislikes(_.uniq([...dislikes, movie]));
		} else {
			setDislikes(
				dislikes.filter((dislikedMovie) => dislikedMovie.ID != movie.ID)
			);
			setLikes(_.uniq([...likes, movie]));
		}
	};

	const removeFromWatchList = (movie) => {
		setLikes(likes.filter((m) => m.ID !== movie.ID));
		setDislikes(dislikes.filter((m) => m.ID !== movie.ID));
		setWatchList(watchList.filter((m) => m.ID !== movie.ID));
	};

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
			{watchList.length >= 1 && (
				<>
					<Title style={{ marginLeft: '44px' }}>Watch List</Title>
					<List style={{ marginLeft: '22px' }}>
						{watchList.map((movie, index) => (
							<Movie
								key={index}
								img={movie.Poster || ''}
								title={movie.Title}
								genre={movie.Genre}
								time={movie.Runtime}
								hoverButtons={[
									{
										title: '👍',
										callBack: () =>
											changeLikeDislikeStatus(movie),
									},
									{
										title: '🗑️',
										callBack: () =>
											removeFromWatchList(movie),
									},
									{
										title: '👎',
										callBack: () =>
											changeLikeDislikeStatus(
												movie,
												false
											),
									},
								]}
							/>
						))}
					</List>
					{likes.length >= 1 && (
						<Title style={{ marginLeft: '44px' }}>Liked</Title>
					)}
					<List style={{ marginLeft: '22px' }}>
						{likes.map((movie, index) => (
							<Movie
								key={index}
								img={movie.Poster || ''}
								title={movie.Title}
								genre={movie.Genre}
								time={movie.Runtime}
								hoverButtons={[
									{
										title: '👍',
										callBack: () =>
											changeLikeDislikeStatus(movie),
									},
									{
										title: '🗑️',
										callBack: () =>
											removeFromWatchList(movie),
									},
									{
										title: '👎',
										callBack: () =>
											changeLikeDislikeStatus(
												movie,
												false
											),
									},
								]}
							/>
						))}
					</List>
					{dislikes.length >= 1 && (
						<Title style={{ marginLeft: '44px' }}>Disliked</Title>
					)}
				</>
			)}
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
