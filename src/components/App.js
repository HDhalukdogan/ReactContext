import React, { Component } from 'react'
import ColorContext from '../contexts/ColorContext'
import { LanguageStore } from '../contexts/LanguageContext'
import LanguageSelector from './LanguageSelector'
import UserCreate from './UserCreate'

class App extends Component {


  render() {
    return (
      <div className='ui container'>
        <LanguageStore>
          <LanguageSelector/>
          <ColorContext.Provider value="red">
            <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    )
  }
}

export default App;