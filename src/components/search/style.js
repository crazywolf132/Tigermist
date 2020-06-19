import styled from 'styled-components';

export const SearchBar = styled.input`
	width: 80%;
	outline: none;
	border: none;
	border-bottom: solid #171d33 3px;
	padding: 24px;
	color: #171d33;
	font-weight: 600;
	margin-left: 10%;
	margin-right: 10%;
	border-radius: 5px;

	@media (max-width: 376px) {
		width: 91%;
		max-width: 91%;
		justify-content: center;
		align-items: center;
		padding: 16px;
		margin: 0 auto;
	}
`;
