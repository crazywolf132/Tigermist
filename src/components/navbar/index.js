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
				{menuItems.map((item, index) => (
					<MenuItem
						key={index}
						active={item.active}
						onClick={() => {
							// changeActive(index);
							let copy = menuItems.map((item) => {
								return { ...item, active: false };
							});
							copy[index] = { ...copy[index], active: true };
							setMenuItems(copy);
							item.callBack && item.callBack();
						}}>
						{item.title}
					</MenuItem>
				))}
			</Menu>
			<UserGroup>
				<Welcome>Hi, Lily</Welcome>
				<UserIcon src='https://thispersondoesnotexist.com/image' />
			</UserGroup>
		</NavContainer>
	);
}
