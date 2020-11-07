import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import View from '@vkontakte/vkui/dist/components/View/View';

const MainView = ({ id , go }) => (
<View id={ id } activePanel = 'mainPanel'>
	<Panel id='mainPanel'>
		<PanelHeader left={<PanelHeaderButton onClick={ go } data-to='test'>{'Назад'}</PanelHeaderButton>}>
			StudORG
		</PanelHeader>
	</Panel>
</View>
);

MainView.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default MainView;