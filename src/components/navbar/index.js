import React from 'react';
import { NavContainer, UserIcon, Welcome, UserGroup } from './style';

export default function NavBarComponet(props) {
	return (
		<NavContainer>
			<UserGroup>
				<Welcome>Hi, Lily</Welcome>
				<UserIcon src='https://thispersondoesnotexist.com/image' />
			</UserGroup>
		</NavContainer>
	);
}
