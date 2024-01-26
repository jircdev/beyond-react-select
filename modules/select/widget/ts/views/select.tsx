import React from 'react';
import Select from 'react-select';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

const options = [
	{ value: 'chocolate', label: 'Chocolate' },
	{ value: 'strawberry', label: 'Strawberry' },
	{ value: 'vanilla', label: 'Vanilla' },
];

export function SelectComponent({ container }) {
	const [selectedOption, setSelectedOption] = React.useState(null);

	return (
		<div className='App'>
			<Select defaultValue={selectedOption} onChange={setSelectedOption} options={options} />
		</div>
	);
}
