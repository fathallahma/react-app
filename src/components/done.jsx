import React from 'react';

import Data from './data.jsx';
/*
 define root component
*/
export default class Done extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="doneTask">
        <Data label="taches terminées" value={ this.props.done.length } />
      </div>
    );
  }
}
