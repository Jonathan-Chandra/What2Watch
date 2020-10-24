import React, {Component} from 'react';
import { Header, Icon, List } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import axios from 'axios';

class App extends Component{
  state = {
    activities: []
  }

  // Set API here
  componentDidMount(){
    axios.get('http://localhost:5000/api/activities').then((response) =>
      {
        this.setState(
          {
            activities: response.data
          }
        )
      }
    )
  }
  render() {

    return (
    <div>
        <Header as='h2'>
          <Icon name='user' />
          <Header.Content>
            What2Watch
          </Header.Content>
        </Header>
        <List>
          {this.state.activities.map((activity: any) =>
            <List.Item key = {activity.id}>{activity.title}</List.Item>
          )}
        </List>
    </div>
  );
  }
  
}

export default App;
