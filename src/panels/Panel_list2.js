import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import View from '@vkontakte/vkui/dist/components/View/View';
import CellButton from '@vkontakte/vkui/dist/components/CellButton/CellButton';
class Panel_list2 extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        activePanel: 'panel1'
      }
    }
  
    render() {
      return (
        <View activePanel={this.state.activePanel}>
          <Panel id="panel1">
            <PanelHeader>Panel 1</PanelHeader>
            <Group>
              <CellButton onClick={ () => this.setState({ activePanel: 'panel2' }) }>
                Go to panel 2
              </CellButton>
            </Group>
          </Panel>
          <Panel id="panel2">
            <PanelHeader>Panel 2</PanelHeader>
            <Group>
              <CellButton onClick={ () => this.setState({ activePanel: 'panel3' }) }>
                Go to panel 3
              </CellButton>
            </Group>
          </Panel>
          <Panel id="panel3">
            <PanelHeader>Panel 3</PanelHeader>
            <Group>
              <CellButton onClick={ () => this.setState({ activePanel: 'panel1' }) }>
                Back to panel 1
              </CellButton>
            </Group>
          </Panel>
        </View>
      )
    }
  }
  export default Panel_list2;