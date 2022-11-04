import React from 'react'
import Header from './components/Header'
import EmojiChange from './components/EmojiChange'

export default class App extends React.Component {

    render() {
    return (
      <>
        <Header bgColor="#DB7C46" textColor="#B6D2DE" />
        <h1 style={{ textAlign: "center" }} id="exercise">
          Exercise 4 (Emoji + Calculator)
        </h1>
        <EmojiChange />
        <br />
      </>
       )
  }
}



