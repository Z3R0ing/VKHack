import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Input from '@vkontakte/vkui/dist/components/Input/Input';
import FormLayoutGroup from '@vkontakte/vkui/dist/components/FormLayoutGroup/FormLayoutGroup';
import FormLayout from '@vkontakte/vkui/dist/components/FormLayout/FormLayout';
import File from '@vkontakte/vkui/dist/components/File/File';
import Icon24Camera from '@vkontakte/icons/dist/24/camera';
import Icon24Document from '@vkontakte/icons/dist/24/document';
import {Group} from '@vkontakte/vkui';
import { Header } from '@vkontakte/vkui';
import { Cell } from '@vkontakte/vkui';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import { getAvatarUrl } from '@vkontakte/vk-bridge';
import {Select} from '@vkontakte/vkui';
import {Textarea} from '@vkontakte/vkui';

const ShareMore = ({ id , go }) => (
	<Panel id={id}>
		<PanelHeader left={<PanelHeaderButton onClick={ go } data-to='test'>{'Назад'}</PanelHeaderButton>}>
			Подробнее
		</PanelHeader>

		<Group description="Дефолтный стиль аватарки. Используется для юзеров, групп.">
       		<Header mode="secondary">Дефолтный тип</Header>
        	<Cell before={<Avatar src={getAvatarUrl("https://sun4-15.userapi.com/impg/gKisXVJfnqW7cNq-8gBMtFo2Ky8any2hsm_NUw/D0lc-NsYlsI.jpg")} />}>Евгений Авсиевич</Cell>
      	</Group>

		<FormLayoutGroup top="Подробности">
            
			<Select
              	top="Тип задания"
              	placeholder="Выберите тип задания"
              	status={'Тут нужно написать purpose' ? 'valid' : 'error'}
              	bottom={'Тут нужно написать purpose' ? '' : 'Пожалуйста, укажите тип задания'}
              
              	value={'Тут нужно написать purpose'}
              	name="purpose"
            >
			  </Select>
			  <Input placeholder="Сроки сдачи" />
			  <FormLayout>
        		<Textarea top="Заметки" placeholder="Группы, исполнители, продюссеры" />
      		  </FormLayout>
			  <Input placeholder="Преподаватель" />
        </FormLayoutGroup>
		<FormLayout>
        <File top="Прикреплённые документы" before={<Icon24Document />} controlSize="xl" mode="secondary" />
      </FormLayout>
	</Panel>
);

ShareMore.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default ShareMore;