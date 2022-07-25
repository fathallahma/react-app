import React from 'react';

import '../assets/style/murImages.css';
import ImageWall from '../scripts/ImageWall.jsx';
import ImageDetails from '../scripts/ImageDetails.jsx';
import ImageWallListing from '../scripts/ImageWall.jsx';
import Data from '../data/dataImages.js';

import dataImages from '../data/dataImages.js';

/*
 define root component
*/
export default class ImageApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <ImageWall
      src = {Data[0].image}
      titre = {Data[0].texte}
      />
      <ImageDetails/>
      </div>
    );
  }
}
