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
import {Accordion, Card} from 'react-bootstrap';

const MainView = ({ id , go }) => {
		const [date, setDate] = useState(new Date());
		
		const onChange =()=>{
			setDate(date)
		}

		return(
			<View id={ id } activePanel = 'mainPanel'>
	<Panel id='mainPanel'>
			<PanelHeader left={<PanelHeaderButton onClick={ go } data-to='test'>{'Назад'}</PanelHeaderButton>}>
				StudORG
			</PanelHeader>
			<Div>
			<Calendar onChange={onChange} value={date} />
			</Div>
			
			<Accordion defaultActiveKey="0">
  				<Card>
    				<Accordion.Toggle as={Card.Header} eventKey="0">Инженерная графика </Accordion.Toggle>
    				<Accordion.Collapse eventKey="0">
					<CardGrid>	
						<FormLayout>
        					<Checkbox>Подзадача 1</Checkbox>
        					<Checkbox>Подзадача 2</Checkbox>
        					<Checkbox>Подзадача 3</Checkbox>
        					<Checkbox>Подзадача 4</Checkbox>
      					</FormLayout>
        			</CardGrid>
    				</Accordion.Collapse>
  				</Card>

				  <Card>
    				<Accordion.Toggle as={Card.Header} eventKey="1">Программирование</Accordion.Toggle>
    				<Accordion.Collapse eventKey="1">
					<CardGrid>	
						<FormLayout>
        					<Checkbox>Подзадача 1</Checkbox>
        					<Checkbox>Подзадача 2</Checkbox>
        					<Checkbox>Подзадача 3</Checkbox>
        					<Checkbox>Подзадача 4</Checkbox>
      					</FormLayout>
        			</CardGrid>
    				</Accordion.Collapse>
  				</Card>
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