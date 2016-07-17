import React from 'react';
import {checkbox} from 'react-controlfacades';

class MyCheckbox extends React.Component {
  render() {
    const style = {
      display: 'inline-block',
      width: '50px',
      height: '30px',
      border: '2px solid black',
      backgroundColor: this.props.value ? 'black': 'white',
    };

    return (
      <div style={style}></div>
    );
  }
}

export default MyCheckbox;
