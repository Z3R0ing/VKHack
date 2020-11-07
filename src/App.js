import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';
import Root from '@vkontakte/vkui/dist/components/Root/Root';

import TestView from './view/TestView';
import MainView from './view/MainView';
import Edit from './view/Edit';
import MoreInfo from './view/MoreInfo';
import Share from './view/Share';
import ShareMore from './view/ShareMore';

const App = () => {
	const [activePanel, setActivePanel] = useState('test');
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<Root activeView={this.state.activeView}>
			<TestView id='test' go={go}/>
			<MainView id='main' go={go}/>
			<Edit id='edit' go={go}/>
			<MoreInfo id='moreInfo' go={go}/>
			<Share id='share' go={go}/>
			<ShareMore id='shareMore' go={go}/>
		</Root>
	);
}

export default App;