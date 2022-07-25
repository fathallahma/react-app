import React from 'react';

export default class ImageWall extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
        const view =
             <div className="ImageWall">
               <div id = "mur">
                <img
                  src = {this.props.src}
                  alt = {this.props.titre}
                  title = {this.props.titre}
                />
               </div>
             </div>
        return view;
  }
}
