import React from 'react';

export default class ImageDetails extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
        const view =
             <div className="ImageDetails">
               <div id = "details"> <p>{ "details image" }</p> </div>
             </div>
        return view;
  }
}
