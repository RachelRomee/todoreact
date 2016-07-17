import React from 'react';
import TodoList from './TodoList';
import ColorSet from './styles/ColorSet';

class App extends React.Component {
  render() {
    return (
      <div style={styles.body}>
          <TodoList/>
      </div>
    );
  }
}

export default App;

const styles = {
	body: {
    width: "105wh",
    backgroundColor: ColorSet.background,
    fontFamily: "'Roboto', sansSerif",
    margin: -35,
    fontWeight: 200
	}
}
