import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderContent from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import View from '@vkontakte/vkui/dist/components/View/View';
import "bootstrap/dist/css/bootstrap.min.css"
import {Accordion} from 'react-bootstrap';
import{Card,Header, Cell, Checkbox, FormLayout, PanelHeaderBack, Div, CellButton} from '@vkontakte/vkui';


const Share = ({ id , go }) => (
<View id={id} activePanel='sharePanel'>
	<Panel id='sharePanel'>
	<PanelHeader left = {<PanelHeaderBack onClick={ go } data-to='test'/>}>
    <PanelHeaderContent>
      <Cell>Поделились</Cell>
    </PanelHeaderContent>
  </PanelHeader>	
		<Accordion defaultActiveKey="-1">
			<Div>
  				<Card>
    				<Accordion.Toggle as={Header} eventKey="0">Инженерная графика </Accordion.Toggle>
    				<Accordion.Collapse eventKey="0">
						<FormLayout>
        					<Checkbox>Подзадача 1</Checkbox>
        					<Checkbox>Подзадача 2</Checkbox>
        					<Checkbox>Подзадача 3</Checkbox>
        					<Checkbox>Подзадача 4</Checkbox>
							<Cell>Cрок: 18.11</Cell>
							<CellButton onClick={ go} data-to='shareMore'>{'Подробнее'}</CellButton>
      					</FormLayout>
						  
    				</Accordion.Collapse>
  				</Card>
				  </Div>
			<Div>
				  <Card>
				  <Accordion.Toggle as={Header} eventKey="1">Программирование</Accordion.Toggle>
    				<Accordion.Collapse eventKey="1">
						<FormLayout>
        					<Checkbox>Подзадача 1</Checkbox>
        					<Checkbox>Подзадача 2</Checkbox>
        					<Checkbox>Подзадача 3</Checkbox>
        					<Checkbox>Подзадача 4</Checkbox>
							<Cell>Cрок: 18.11</Cell>
							<CellButton onClick={ go} data-to='shareMore'>{'Подробнее'}</CellButton>
      					</FormLayout>
    				</Accordion.Collapse>
  				</Card>
			</Div>
			</Accordion>
	</Panel>
</View>
);

Share.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Share;