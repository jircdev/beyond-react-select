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

	const myCache = createCache({ key: 'container', container: container.holder });

	return (
		<div className='App'>
			<CacheProvider value={myCache}>
				<Select defaultValue={selectedOption} onChange={setSelectedOption} options={options} />
			</CacheProvider>
		</div>
	);
}
