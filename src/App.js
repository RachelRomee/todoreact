import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import TodoList from './TodoList';

injectTapEventPlugin();

const apiUrl = "https://whispering-thicket-55256.herokuapp.com/"

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <h1 className="flow-text" >WooHoo!</h1>
          <TodoList url={apiUrl}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
