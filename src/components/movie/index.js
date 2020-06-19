import React from 'react';
import { MovieImage, MovieContainer, MovieTitle, MovieDetails } from './style';

export default function MovieComponent(props) {
	const [isHovering, setHovering] = useState(false);

	return (
		<MovieContainer
			onMouseEnter={() => setHovering(true)}
			onMouseLeave={() => setHovering(false)}>
			<MovieImage src={img} />
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
			<MovieTitle>
				{title.length > 13 ? title.slice(0, 13) + '...' : title}
			</MovieTitle>
			<MovieDetails>
				{`${genre} ● ${time}`.length > 41
					? genre.slice(0, 41 - `● ${time}...`.length) + '...'
					: genre}{' '}
				● {time}
			</MovieDetails>
		</MovieContainer>
	);
}

MovieComponent.defaultProps = {
	hoverButtons: [],
};
