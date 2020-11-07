import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Input from '@vkontakte/vkui/dist/components/Input/Input';
import FormLayoutGroup from '@vkontakte/vkui/dist/components/FormLayoutGroup/FormLayoutGroup';
import { Button, Card, CardGrid, Checkbox, Div, File, FormLayout, Group, Header, Textarea } from '@vkontakte/vkui';
import { Select } from '@vkontakte/vkui';
import { Icon24Document } from '@vkontakte/icons';
import View from '@vkontakte/vkui/dist/components/View/View';
import{PanelHeaderBack} from '@vkontakte/vkui';



  
const Edit = ({ id , go }) => (
<View id={id} activePanel='viewPanel'>
	<Panel id='viewPanel'>
	<PanelHeader left={<PanelHeaderBack onClick={ go } data-to='test'>{'Назад'}</PanelHeaderBack>}>
			Edit Frame
		</PanelHeader>
        <FormLayoutGroup top="Экран редактирования">
              <Input placeholder="Название" />
			  <Select
              top="Тип задания"
              placeholder="Выберите тип задания"
              status={'Тут нужно написать purpose' ? 'valid' : 'error'}
              bottom={'Тут нужно написать purpose' ? '' : 'Пожалуйста, укажите тип задания'}
              
              value={'Тут нужно написать purpose'}
              name="purpose"
            >
              <option value="0">Курсовая работа</option>
              <option value="1">Лабораторная работа</option>
              <option value="2">Проектная работа</option>
              <option value="3">Домашняя работа</option>

            </Select>
			  <Textarea top="О заметке" placeholder="Заметки" />

			  
        </FormLayoutGroup>
		<Group separator="hide" header={<Header mode="secondary">Подзадачи</Header>}>
        <CardGrid>
          <Card size="l" mode="outline">
			<FormLayout>
				
        		<Checkbox>Подзадача 1</Checkbox>
        		<Checkbox>Подзадача 2</Checkbox>
        		<Checkbox>Подзадача 3</Checkbox>
        		<Checkbox>Подзадача 4</Checkbox>
      		</FormLayout>
          </Card>
        </CardGrid>
      </Group>

      <FormLayout>
        <File top="Загрузите документы" before={<Icon24Document />} controlSize="xl" mode="secondary" />
      </FormLayout>
	  <FormLayout>
	  <Input placeholder="Преподаватель" />
	  <Input placeholder="Сроки сдачи" />
	  </FormLayout>	 
	  
	  <FormLayout>
			
		<Div> 
		<Button mode="commerce">Commerce</Button>
		<Button mode="destructive">Destructive</Button>

		</Div>
		</FormLayout>
	</Panel>
</View>
);

Edit.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Edit;