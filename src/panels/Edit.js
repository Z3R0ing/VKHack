import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Input from '@vkontakte/vkui/dist/components/Input/Input';
import FormLayoutGroup from '@vkontakte/vkui/dist/components/FormLayoutGroup/FormLayoutGroup';

const Edit = ({ id , go }) => (
	<Panel id={id}>
		<PanelHeader
		left={<PanelHeaderButton onClick={ go } data-on='test'>Назад</PanelHeaderButton>}
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