import React from 'react';

class Test_Panel extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        activePanel: 'panel1'
      }
    }
  
    render() {
        return (
          <Root activeView={this.state.activeView}>
            <Panel_list2 id= 'panel_2' go={go}/>
          </Root>
        )
      }
    }
  export default Test_Panel;