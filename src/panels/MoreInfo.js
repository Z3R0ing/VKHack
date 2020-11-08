import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import InfoRow from '@vkontakte/vkui/dist/components/InfoRow/InfoRow';
import { Button, Cell, Div } from '@vkontakte/vkui';
import { FormLayout } from '@vkontakte/vkui';
import { Checkbox } from '@vkontakte/vkui';
import { View } from '@vkontakte/vkui';
import{PanelHeaderBack, PanelHeaderContent, Card} from '@vkontakte/vkui';
import Icon24Attach from '@vkontakte/icons/dist/24/attach';

const MoreInfo = ({ id , go }) => (
<View id={id} activePanel='infoPanel'>
	<Panel id='infoPanel'>
  <PanelHeader left = {<PanelHeaderBack onClick={ go } data-to='test'/>}>
    <PanelHeaderContent>
      <Cell>Программирование</Cell>
    </PanelHeaderContent>
  </PanelHeader>
    
      <Group>
        <Cell>
          <InfoRow header="Тип задания">
            Лабораторная
          </InfoRow>
        </Cell>
        <Cell>
          <InfoRow header="Срок для задания">
            8 ноября 2020
          </InfoRow>
        </Cell>
		<Cell multiline>
			<InfoRow header="Подзадачи">
      <Card size="l" mode="outline">
				<FormLayout>
					<Checkbox>Установить IDE</Checkbox>
					<Checkbox>Настроить IDE</Checkbox>
					<Checkbox>Программа</Checkbox>
					<Checkbox>Отчёт</Checkbox>
				</FormLayout>
      </Card>
			</InfoRow>
		</Cell>
        <Cell multiline>
          <InfoRow header="Заметки">
            Лабу делать в NewIDE. <br></br>
			Для старта: <br></br>
			`trasher install <br></br>
			`trasher start <br></br>
          </InfoRow>
        </Cell>
        <Cell multiline>
          <InfoRow header="Прикреплённые файлы">
          <Div style={{display: 'flex'}}>
				    <Button before={<Icon24Attach/>} stretched style={{ marginRight: 8 }}>Добавить</Button>
			    </Div>
          </InfoRow>
        </Cell>
        <Cell>
          <InfoRow header="Преподаватель">
            Дорофеев А.С.
          </InfoRow>
        </Cell>
      </Group>
	</Panel>
</View>
);

MoreInfo.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default MoreInfo;