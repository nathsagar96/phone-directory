import React, { Component } from 'react';
import AddSubscriber from './AddSubscriber';
import ShowSubscribers from './ShowSubscribers';

class PhoneDirectory extends Component {

  constructor() {
    super();
    this.state = {
      subscriberList: []
    }
  }

  addSubscriberHandler = (newSubscriber) => {
    let subscriberList = this.state.subscriberList;
    if (subscriberList.length > 0) {
      newSubscriber.id = subscriberList[subscriberList.length - 1].id + 1;
    } else {
      newSubscriber.id = 1;
    }
    subscriberList.push(newSubscriber);
    this.setState({ subscriberList: subscriberList });
    console.log(this.state.subscriberList);
  }

  render() {
    return (
      // <AddSubscriber addSubscriberHandler={this.addSubscriberHandler} />
      <ShowSubscribers subscriberList={this.state.subscriberList} />
    )
  }
}

export default PhoneDirectory;