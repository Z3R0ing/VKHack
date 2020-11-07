import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';

const ShareMore = ({ id , go }) => (
	<Panel id={id}>
		<PanelHeader left={<PanelHeaderButton onClick={ go } data-to='test'>{'Назад'}</PanelHeaderButton>}>
			Подробнее
		</PanelHeader>
	</Panel>
);

ShareMore.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default ShareMore;