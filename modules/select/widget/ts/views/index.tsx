import React from 'react';

import { SelectComponent } from './select';

export /*bundle*/
function View(props) {
	return (
		<div className='view'>
			<h1 className='view__h1'>react-select</h1>
			<div className='component-implementation'>
				<div className='component-result'>
					<h3>Result:</h3>
					<SelectComponent container={props.widget} />
				</div>
			</div>
		</div>
	);
}
