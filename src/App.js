import React, { useState, useEffect } from 'react';
import Root from '@vkontakte/vkui/dist/components/Root/Root';
import TestView from './view/TestView';
import MoreInfo from './view/MoreInfo';
/*import MainView from './view/MainView';
import Edit from './view/Edit';
import Share from './view/Share';
import ShareMore from './view/ShareMore';*/
import '@vkontakte/vkui/dist/vkui.css';

const App = () => {
	const [activeView] = useState('test');

	return (
		<Root activeView={activeView}>
			<TestView id = 'test'/>
			<MoreInfo id = 'moreInfo'/>
		</Root>
	);
}

export default App;