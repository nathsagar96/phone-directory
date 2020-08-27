import React, { Component } from 'react';
import Header from './Header';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      subscriberList: []
    }
  }

  render() {
    return (
      <div>
        <Header heading='phone directory' />
        <div className='component-body-container'>
          <button className='custom-btn add-btn'>Add</button>

          <div className='grid-container heading-container'>
            <span className='grid-item name-heading'>Name</span>
            <span className='grid-item phone-heading'>Phone</span>
          </div>

          {
            this.state.subscriberList.map(
              (subscriber) => {
                return (
                  <div key={subscriber.id} className='grid-container'>
                    <div className='grid-item'>{subscriber.name}</div>
                    <div className='grid-item'>{subscriber.phone}</div>
                    <span className='grid-item action-btn-container'>
                      <button className='custom-btn delete-btn'>Delete</button>
                    </span>
                  </div>
                );
              }
            )
          }

        </div>
      </div>
    );
  }
}

export default App;
