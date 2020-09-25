import React, { useState } from 'react';
import './App.scss'

import ReleaseBlock from './Components/ReleaseBlock'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    fetch('https://api.github.com/users/myparcelnl/repos')
    .then(response => response.json())
    .then(data => {
      this.setState({data: data});
    })
    .catch(error => console.log(error))
  }

  render() {
    return (  
      this.state.data.map((repo) => {
        return <ReleaseBlock name={repo.name} />
      })
    )
  }
}


export default App;
