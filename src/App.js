import React from 'react';
import Header from './Header';
import './App.css';

function App() {
  let subscribers = [
    {
      id: 1,
      name: 'Sagar',
      phone: '888888888'
    },
    {
      id: 1,
      name: 'Bhavana',
      phone: '999999999'
    }
  ];

  return (
    <div>
      <Header />
      <div className="component-body-container">
        <button className="custom-btn add-btn">Add</button>

        <div className="grid-container heading-container">
          <span className="grid-item name-heading">Name</span>
          <span className="grid-item phone-heading">Phone</span>
        </div>

        {
          subscribers.map(
            (subscriber) => {
              return (
                <div className="grid-container">
                  <div className="grid-item">{subscriber.name}</div>
                  <div className="grid-item">{subscriber.phone}</div>
                </div>
              );
            }
          )
        }

      </div>
    </div>
  );
}

export default App;
