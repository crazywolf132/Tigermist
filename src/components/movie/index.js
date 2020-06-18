import React from 'react';
import { MovieImage, MovieContainer, MovieTitle, MovieDetails } from './style';

export default function MovieComponent(props) {
	return (
		<MovieContainer>
			<MovieImage src='https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg' />
			<MovieTitle>Blade Runner</MovieTitle>
			<MovieDetails>Action, Sci-Fi, Thriller ● 117 min</MovieDetails>
		</MovieContainer>
	);
}
