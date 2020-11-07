import React, { useState, useEffect } from 'react';
import View from '@vkontakte/vkui/dist/components/View/View';
import TestView from './panels/TestView';
import Edit from './panels/Edit';
/*import MainView from './view/MainView';
import MoreInfo from './view/MoreInfo';
import Share from './view/Share';
import ShareMore from './view/ShareMore';*/
import '@vkontakte/vkui/dist/vkui.css';
import { Panel } from '@vkontakte/vkui';

const App = () => {
	const [activePanel, setActivePanel] = useState('edit');

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		
			<View activePanel={activePanel}>
				
					<TestView id = 'test' go = { go }/>
					<Edit id = 'edit' go = { go }/>
				
			</View>
		
	);
}

export default App;