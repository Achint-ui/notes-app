import NotesList from "./components/NotesList";
import React, {useState, useEffect} from "react";
import {nanoid} from 'nanoid'
import Search from "./components/Search";
import Header from "./components/Header";

function App() {

  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem('react-notes-app-data')))
 


const [darkMode, setDarkMode] = useState(false)

const handleMode = () => {
  setDarkMode((prevMode)=>{
    return !prevMode
  })
 
}

const [searchText, setSearchText] = useState('')



useEffect(()=>{
  localStorage.setItem('react-notes-app-data',
     JSON.stringify(notes)
  )
}, [notes])

const deleteNote = (id)=> {
    const newNotes = notes.filter((note)=>note.id!==id)
    setNotes(newNotes)
}
 
const addNote = (text) => {
    const date = new Date()
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    

    const newNotes = [...notes, newNote]
    setNotes(newNotes)
}



  return (
    <div className={darkMode && 'dark-mode'}>
        <div className="container">
      <Header handleToggleDarkMode={handleMode} darkModeValue={darkMode}/>
      <Search handleSearchNote={setSearchText}/>
      <NotesList 
        notes={notes.filter((note)=>{
          return note.text.toLowerCase().includes(searchText)
        })} 
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}/>
      
    </div>
    </div>
   
  );
}

export default App;
