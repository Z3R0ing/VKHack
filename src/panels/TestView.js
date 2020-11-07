import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import View from '@vkontakte/vkui/dist/components/View/View';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Div from '@vkontakte/vkui/dist/components/Div/Div';

const TestView = ({ id, go }) => (
<View id={ id } activePanel = 'testPanel'>
    <Panel id='testPanel'>
		<PanelHeader>Example</PanelHeader>
        <Div>
            <Button onClick={ go } data-to='mainView'>
				Main View screen
			</Button>
        </Div>
        <Div>
            <Button onClick={ go } data-to='edit'>
				Edit screen
			</Button>
        </Div>
        <Div>
            <Button onClick={ go } data-to='moreInfo'>
				More info screen
			</Button>
        </Div>
        <Div>
            <Button onClick={ go } data-to='share'>
                share screen
			</Button>
        </Div>
        <Div>
            <Button onClick={ go } data-to='shareMore'>
                shareMore screen
			</Button>
        </Div>
    </Panel>
</View>
);

TestView.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default TestView;