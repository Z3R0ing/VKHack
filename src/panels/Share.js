import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import View from '@vkontakte/vkui/dist/components/View/View';
import{PanelHeaderBack} from '@vkontakte/vkui';

const Share = ({ id , go }) => (
<View id={id} activePanel='sharePanel'>
	<Panel id='sharePanel'>
	<PanelHeader left={<PanelHeaderBack onClick={ go } data-to='test'>{'Назад'}</PanelHeaderBack>}></PanelHeader>
		<h2 style={{textAlignVertical: "center",textAlign: "center"}}>Поделились</h2>	
		
	</Panel>
</View>
);

Share.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Share;