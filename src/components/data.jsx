import React from 'react';
import PropTypes from 'prop-types';

/*
 define Data component, it displays a label and the corresponding data
*/
export default class Data extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
        <div>
          <span className= "label"> { this.props.label } </span>
          :
          <span className= "value"> { this.props.value } </span>
        </div>
    );
  }

  static propTypes = {
    label : PropTypes.string,
    value : PropTypes.any
  }
}
