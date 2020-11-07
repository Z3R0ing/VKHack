import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import { View, CardGrid, Checkbox, Div, FormLayout } from '@vkontakte/vkui';
import { Button} from '@vkontakte/vkui';
import DatePicker from 'react-date-picker';
import Calendar from 'react-calendar';
import "bootstrap/dist/css/bootstrap.min.css"
import {Accordion} from 'react-bootstrap';
import {Card, Header, PanelHeaderBack, Cell} from '@vkontakte/vkui';

const MainView = ({ id , go }) => {

		const [date, setDate] = useState(new Date());
		
		const onChange =()=>{
			setDate(date)
		}

		return(
			<View id={ id } activePanel = 'mainPanel'>
	<Panel id='mainPanel'>
			<PanelHeader left={<PanelHeaderBack onClick={ go } data-to='test'/>}>
				StudORG
			</PanelHeader>
			<Div>
			<Calendar onChange={onChange} value={date} />
			</Div>
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
      					</FormLayout>
    				</Accordion.Collapse>
  				</Card>
			</Div>
			</Accordion>
			</Panel>
			</View>
		);
	
};

MainView.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default MainView;