import React, { useState } from 'react';
import { SearchBar } from './style';

export default function SearchComponent(props) {
	const { callBack } = props;

	const [search, setSearch] = useState('');

	return (
		<SearchBar
			value={search}
			onChange={(e) => setSearch(e.target.value)}
			onKeyPress={(e) => e.key === 'Enter' && callBack(search)}
			placeholder='Search for a movie...'
		/>
	);
}
