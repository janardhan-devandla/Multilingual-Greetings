/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-state */
import {Component} from 'react'
import TabsList from './components/TabsList'
import LanguageList from './components/LanguageList'
import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class App extends Component {
  state = {activeTabId: languageGreetingsList[0].id}

  languageGreetingsList = () => {
    const {activeTabId} = this.state

    const filteringLanguageGreetingsList = languageGreetingsList.filter(
      each => each.id === activeTabId,
    )
    return filteringLanguageGreetingsList
  }

  onSelectLanguageButton = selectId => {
    this.setState({activeTabId: selectId})
  }

  render() {
    const filteringLanguageGreetingsList = this.languageGreetingsList()

    return (
      <div className="bg-container">
        <h1>Multilingual Greetings</h1>
        <ul className="btn-container">
          {languageGreetingsList.map(each => (
            <TabsList
              listItem={each}
              key={each.id}
              onSelectHandler={this.onSelectLanguageButton}
            />
          ))}
        </ul>
        <ul>
          {filteringLanguageGreetingsList.map(each => (
            <LanguageList languageList={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default App
