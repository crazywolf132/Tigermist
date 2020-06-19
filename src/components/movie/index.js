import React from 'react';
import { MovieImage, MovieContainer, MovieTitle, MovieDetails } from './style';

export default function MovieComponent(props) {
	const [isHovering, setHovering] = useState(false);

	return (
		<MovieContainer>
			<MovieImage src='https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg' />
			<MovieTitle>Blade Runner</MovieTitle>
			<MovieDetails>Action, Sci-Fi, Thriller ● 117 min</MovieDetails>
		<MovieContainer
			onMouseEnter={() => setHovering(true)}
			onMouseLeave={() => setHovering(false)}>
			{isHovering && (
				<HoverButtonContainer>
					{hoverButtons.map((button, index) => (
						<HoverButton
							style={button.style}
							key={index}
							onClick={button.callBack}>
							{button.title}
						</HoverButton>
					))}
				</HoverButtonContainer>
			)}
		</MovieContainer>
	);
}

MovieComponent.defaultProps = {
	hoverButtons: [],
};
