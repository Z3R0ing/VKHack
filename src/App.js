import React, { useState, useEffect } from 'react';
import View from '@vkontakte/vkui/dist/components/View/View';
import TestView from './panels/TestView';
import Edit from './panels/Edit';
import MainView from './panels/MainView';
import MoreInfo from './panels/MoreInfo';
import Share from './panels/Share';
import ShareMore from './panels/ShareMore';
import '@vkontakte/vkui/dist/vkui.css';
import { Root } from '@vkontakte/vkui';

const App = () => {
	const [activeView, setActiveView] = useState('test');

	const go = e => {
		setActiveView(e.currentTarget.dataset.to);
	};

	return (
		<Root activeView={activeView}>
			<TestView id = 'test' go = {go}/>
			<MainView id = 'mainView' go = {go}/>
			<Edit id = 'edit' go = {go}/>
			<MoreInfo id = 'moreInfo' go = {go}/>
			<Share id = 'share' go = {go}/>
			<ShareMore id = 'shareMore' go = {go}/>
		</Root>
	);
}

export default App;