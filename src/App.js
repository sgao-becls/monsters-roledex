import { useState, useEffect } from 'react'
import './App.css';

import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'

const App = () => {

  const monstersUrl = "https://jsonplaceholder.typicode.com/users"
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [title, setTitle] = useState('Monsters Rolodex')

  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );

  useEffect(() => {
    fetch(monstersUrl)
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  const onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    setSearchField(searchField);
  };

  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div className="App">
      <h1 className='app-title'>{title}</h1>
      <SearchBox className='search' placeholder='search monsters' onChangeHandler={onSearchChange} />
      <br />
      <SearchBox className='search' placeholder='set title' onChangeHandler={onTitleChange} />
      <CardList monsters={filteredMonsters} />
    </div>
  );

}

export default App;
