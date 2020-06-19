import React from 'react';
import { ListContainer } from './style';

export default function ListComponent(props) {
	const { children, ...properties } = props;
	return <ListContainer {...properties}>{children}</ListContainer>;
}
