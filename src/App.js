import React from 'react';
import TodoList from './TodoList';
import ColorSet from './styles/ColorSet';

const styles = {
	body: {
		height: "100vh",
    width: "100wh",
    backgroundColor: ColorSet.primary,
    fontFamily: "'Roboto', sansSerif",
	}
}

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
