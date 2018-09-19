/*global chrome*/
/*global response*/

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageTable from './components/ImageTable.js';

class App extends Component {
 
  constructor(props) {
    super();
    this.state = { images: null };
    this.requestData();
  }

  /*
   * Function to be used as a callback when
   * we request images from content
   */
  setData(data) {
    this.setState({ images: data.images });
  }

  /*
   * Request data from content script
   * and set state based on received data
   */
  requestData() {
    var setData = this.setData.bind(this);
    chrome.tabs.query({ active: true, currentWindow: true },
      function (tabs) {
        chrome.tabs.sendMessage(
          tabs[0].id, // Current tab
          {from: 'popup'},
          setData);
      });
  }

  render() {
    return (
      <div className="App">
        <ImageTable images = {this.state.images} />
      </div>
    );
  }
}

export default App;
