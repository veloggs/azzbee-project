import React, { useState, useEffect } from 'react'
import NotesList from './components/NotesList'
import SearchBar from './components/SearchBar'
import { loadNotes, saveNotes } from './utils/storage'

function App() {
  const [notes, setNotes] = useState([])
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    const savedNotes = loadNotes()
    if (savedNotes) {
      setNotes(savedNotes)
    }
  }, [])

  useEffect(() => {
    saveNotes(notes)
  }, [notes])

  const addNote = () => {
    const newNote = {
      id: Date.now(),
      title: 'New Note',
      content: '',
      lastModified: Date.now()
    }
    setNotes([newNote, ...notes])
  }

  const updateNote = (updatedNote) => {
    setNotes(notes.map(note => 
      note.id === updatedNote.id 
        ? { ...updatedNote, lastModified: Date.now() } 
        : note
    ))
  }

  const deleteNote = (noteId) => {
    setNotes(notes.filter(note => note.id !== noteId))
  }

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchText.toLowerCase()) ||
    note.content.toLowerCase().includes(searchText.toLowerCase())
  )

  return (
    <div className="container">
      <h1>Multi Notes App</h1>
      <button className="add-note-btn" onClick={addNote}>
        Add New Note
      </button>
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
      <NotesList
        notes={filteredNotes}
        onUpdateNote={updateNote}
        onDeleteNote={deleteNote}
      />
    </div>
  )
}

export default App
