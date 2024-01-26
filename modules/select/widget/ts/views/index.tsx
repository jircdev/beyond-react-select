import React from 'react';

import { SelectComponent } from './select';
import { StyleObserver } from './observer';

export /*bundle*/
function View(props) {
	React.useEffect(() => {
		const headStyles = document.head.querySelectorAll('style[data-emotion]');

		const insert = (nodes: HTMLElement[] | NodeList) => {
			nodes.forEach(node => {
				if (node instanceof HTMLStyleElement) {
					// Handle the new style element
					const clonedStyle = node.cloneNode(true) as HTMLElement;
					props.widget.shadowRoot.appendChild(clonedStyle);
				}
			});
		};

		const styleObserver = new StyleObserver({
			callback: insert,
		});
		styleObserver.startObserving();
		insert(headStyles);

		return () => styleObserver.stopObserving();
	}, []);

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
