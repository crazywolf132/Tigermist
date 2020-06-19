import styled from 'styled-components';

export const MovieContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 16px;

	&:hover {
		// transform: scale(1.01);
		opacity: 0.8;
	}
`;

export const MovieImage = styled.img`
	border-radius: 10px;
	box-shadow: 0px 8px 28px rgba(134, 118, 251, 0.4);
	height: 266px;
	width: 177px;
	margin: 0 auto;
`;

export const HoverButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	&:hover {
		cursor: pointer;
	}
`;

export const HoverButton = styled.div`
	border-radius: 100%;
	width: 50px;
	flex: 1;
	text-align: center;

	&:hover {
		cursor: pointer;
		opacity: 0.8;
	}

	&:active {
		opacity: 0.6;
		transform: scale(0.9);
	}
`;

export const MovieTitle = styled.h2`
	margin-top: 8px;
	color: #171d33;
	letter-spacing: 0.1px;
	text-align: center;
	font-size: 12px;
	font-weight: 600;
	margin-bottom: 0px;
`;

export const MovieDetails = styled.p`
	color: #8191b2;
	letter-spacing: 0.2px;
	font-size: 9px;
	text-align: center;
`;
