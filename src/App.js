import React, { Component } from 'react';
import Counter from './components/Counter';
import SuperMarket from './components/SuperMarket';
// import DevTools from 'mobx-react-devtools';

class App extends Component {
  render() {
    return (
      <div>
        <Counter></Counter>
        <hr />
        <SuperMarket></SuperMarket>
        {/* {process.env.NODE_ENV === 'development' && <DevTools></DevTools>}
        <DevTools></DevTools> */}
      </div>
    );
  }
}

export default App;
