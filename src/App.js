import React from 'react';
import TodoList from './TodoList';

const apiUrl = "https://whispering-thicket-55256.herokuapp.com/"

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>WooHoo!</h1>
        <TodoList url={apiUrl}/>
      </div>
    );
  }
}

export default App;
