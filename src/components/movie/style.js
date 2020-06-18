import styled from 'styled-components';

export const MovieContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const MovieImage = styled.img`
	border-radius: 10px;
	box-shadow: 0px 8px 28px rgba(134, 118, 251, 0.4);
	height: 266px;
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
