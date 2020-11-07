import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import View from '@vkontakte/vkui/dist/components/View/View';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Div from '@vkontakte/vkui/dist/components/Div/Div';

const TestView = ({ id }) => (
    <View id = { id } activePanel='test1'>
	<Panel id="test1">
		<PanelHeader>Example</PanelHeader>
        <Div>
            <Button>
				Кнопка
			</Button>
        </Div>
	</Panel>
    </View>
);

TestView.propTypes = {
    id: PropTypes.string.isRequired
};

export default TestView;