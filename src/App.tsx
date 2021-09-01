import { useState } from 'react';
import './App.css';
import List from './components/List'
import AddToList from './components/AddToList'

export interface IState {
  people: {
    name: string
    age: number
    img: string
    note?: string
  }[]
}

function App() {
  const [people, setPeople] = useState<IState['people']>([
    {
      name: "LeBron James",
      age: 35,
      img: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      note: "Allegeric to staying on the same team",
    },
    {
      name: "Kobe Bryant",
      age: 42,
      img: "https://images-na.ssl-images-amazon.com/images/I/519f8CbN8vL._SX450_.jpg"
    }
  ])

  return <div className="App">
    <h1>People Invited to my party</h1>
    <List people={people} />
    <AddToList setPeople={setPeople} people={people} />
  </div>
}

export default App;
