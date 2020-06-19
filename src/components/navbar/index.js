import React, { useState } from 'react';
import {
	NavContainer,
	UserIcon,
	Welcome,
	UserGroup,
	Menu,
	MenuItem,
} from './style';

export default function NavBarComponet(props) {
	const { items } = props;
	const [menuItems, setMenuItems] = useState(items);

	return (
		<NavContainer>
			<Menu>
			</Menu>
			<UserGroup>
				<Welcome>Hi, Lily</Welcome>
				<UserIcon src='https://thispersondoesnotexist.com/image' />
			</UserGroup>
		</NavContainer>
	);
}
