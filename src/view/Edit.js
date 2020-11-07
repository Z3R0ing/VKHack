import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Input from 'react';
import FormLayoutGroup from 'react';

const osName = platform();

const Edit = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={props.go} data-to="test">
			</PanelHeaderButton>}
		>
			Edit Frame
		</PanelHeader>

        <FormLayoutGroup top="Работа">
              <Input placeholder="Место работы" />
              <Input placeholder="Должность" />
            </FormLayoutGroup>
	</Panel>

    
);

Edit.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Edit;
