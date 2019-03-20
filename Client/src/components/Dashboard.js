import React, { Component } from 'react'
import Navbar from './Navbar';
import AddTodo from './AddTodo';

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <AddTodo />
      </div>
    )
  }
}
