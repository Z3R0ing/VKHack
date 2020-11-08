import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import InfoRow from '@vkontakte/vkui/dist/components/InfoRow/InfoRow';
import { Cell } from '@vkontakte/vkui';
import { FormLayout } from '@vkontakte/vkui';
import { Checkbox } from '@vkontakte/vkui';
import { Link } from '@vkontakte/vkui';
import { Header } from '@vkontakte/vkui';
import { View } from '@vkontakte/vkui';
import{PanelHeaderBack} from '@vkontakte/vkui';
const MoreInfo = ({ id , go }) => (
<View id={id} activePanel='infoPanel'>
	<Panel id='infoPanel'>
  <PanelHeader left={<PanelHeaderBack onClick={ go } data-to='test'>{'Назад'}</PanelHeaderBack>}></PanelHeader>
    <h2 style={{textAlignVertical: "center",textAlign: "center"}}>Программирование</h2>	
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
				<FormLayout>
					<Checkbox>Установить IDE</Checkbox>
					<Checkbox>Настроить IDE</Checkbox>
					<Checkbox>Программа</Checkbox>
					<Checkbox>Отчёт</Checkbox>
				</FormLayout>
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
            ХЗ ЧО ТУТ ДЕЛАТЬ
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