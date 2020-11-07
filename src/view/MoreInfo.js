import React from 'react';

import View from '@vkontakte/vkui/dist/components/View/View';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';


class MoreInfo extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        activePanel: 'more_info_panel'
      }
    }
  
    render() {
      return (
        <View activePanel={this.state.activePanel}>
          <Panel id="more_info_panel">
            
          </Panel>
        </View>
      )
    }
  }
export default MoreInfo;