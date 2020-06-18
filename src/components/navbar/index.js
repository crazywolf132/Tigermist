import React from 'react';
import {
	NavContainer,
	UserIcon,
	Welcome,
	UserGroup,
	Menu,
	MenuItem,
} from './style';

export default function NavBarComponet(props) {
	return (
		<NavContainer>
			<Menu>
				<MenuItem active>Discover</MenuItem>
				<MenuItem>Watch List</MenuItem>
			</Menu>
			<UserGroup>
				<Welcome>Hi, Lily</Welcome>
				<UserIcon src='https://thispersondoesnotexist.com/image' />
			</UserGroup>
		</NavContainer>
	);
}
