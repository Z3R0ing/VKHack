import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import TestView from './view/TestView';
import Main from './view/Main';
import Edit from './view/Edit';
import MoreInfo from './view/MoreInfo';
import Share from './view/Share';
import ShareMore from './view/ShareMore';

const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<Root activeView={this.state.activeView}>
			<TestView id='test' go={go}/>
			<Main id='main' go={go}/>
			<Edit id='edit' go={go}/>
			<MoreInfo id='moreInfo' go={go}/>
			<Share id='share' go={go}/>
			<ShareMore id='shareMore' go={go}/>
</Root>
	);
}

export default App;

