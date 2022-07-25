import React from 'react';
import ImageWall from './ImageWall.jsx';
import Data from '../data/dataImages.js';

export default class ImageWallListing extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    //const images = this.props.image.map ( image => <ImageWall {"../images/image0.jpg"} /> );
    const images = this.props.src.map( imagData => <ImageWall{...imgData}/>)
    return (
      <div>
      { images.image }
      </div>
    );
  }
}
