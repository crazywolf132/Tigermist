import styled from 'styled-components';

export const NavContainer = styled.div`
	display: flex;
`;

export const UserIcon = styled.img`
	border-radius: 100%;
	margin: 5px 5px 5px 5px;
	height: 44px;
	width: 44px;
`;

export const Welcome = styled.h1`
	flex: 1;
	color: #171d33;
	letter-spacing: 0.1px;
	font-weight: 600;
	font-size: 24px;
`;

export const UserGroup = styled.div`
	flex: 1;
	display: flex;
`;

export const Menu = styled.ul`
	flex: 9;
	list-style-type: none;
	justify-content: center;
	align-items: center;
	display: flex;
`;

export const MenuItem = styled.li`
	display: inline;
	padding: 10px;
	letter-spacing: 0.2px;
	font-size: 18px;
	font-weight: 600;
	color: #171d33;

	${(props) => props.active && 'border-bottom: 4px solid #613EEA;'}

	&:hover {
		cursor: pointer;
	}
`;
