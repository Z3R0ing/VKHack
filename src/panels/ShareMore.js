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
import {View} from '@vkontakte/vkui';

const ShareMore = ({ id , go }) => (
<View id = {id} activePanel = 'shareInfo'>
	<Panel id='shareInfo'>
		<PanelHeader left={<PanelHeaderButton onClick={ go } data-to='test'>{'Назад'}</PanelHeaderButton>}>
			Подробнее
		</PanelHeader>
		<FormLayout><Input top="Название" placeholder="" /></FormLayout>
		

		<Group description="">
       		<Header mode="secondary">Отправитель</Header>
			   <Cell before={<Avatar src="https://sun9-23.userapi.com/JQQeEVgsP7GWA2E9IDmpaW6l3G8Vfkzbinbwmg/V0kmOnc6Lxs.jpg?ava=1" />}>Данька Лытин</Cell>
      	</Group>

		<FormLayoutGroup top="Подробности">
			<FormLayout>
				<Select
			
              	top="Тип задания"
              	placeholder="Выберите тип задания"
              	status={'Тут нужно написать purpose' ? 'valid' : 'error'}
              	bottom={'Тут нужно написать purpose' ? '' : 'Пожалуйста, укажите тип задания'}
              
              	value={'Тут нужно написать purpose'}
              	name="purpose"
            >
			  </Select>
			  </FormLayout>

			  <FormLayout>
			  <Input top="Сроки сдачи" placeholder="" />	  
			  </FormLayout>

			  <FormLayout>
				  <Input top="Преподаватель"placeholder="" />
			  </FormLayout>
			  <FormLayout>
			  	<Textarea top="Заметки" placeholder="" />
			  </FormLayout>

			  <FormLayout>
			  <File top="Прикреплённые документы" before={<Icon24Document />} controlSize="xl" mode="secondary" />
			  </FormLayout>
        </FormLayoutGroup>
	</Panel>
</View>
);

ShareMore.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default ShareMore;