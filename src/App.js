import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TodoList from './TodoList';

injectTapEventPlugin();

const apiUrl = "https://whispering-thicket-55256.herokuapp.com/"

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
          <TodoList url={apiUrl}/>
      </MuiThemeProvider>
    );
  }
}

export default App;
