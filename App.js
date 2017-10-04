import React from 'react';
import Structure from './Components/Structure'
import store from './Components/Store'

export default class App extends React.Component {
  render() {
    return (
      <Structure store={store} />
    );
  }
}
