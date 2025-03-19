import React from 'react'
import NoteItem from './NoteItem'

function NotesList({ notes, onUpdateNote, onDeleteNote }) {
  return (
    <div className="notes-grid">
      {notes.map(note => (
        <NoteItem
          key={note.id}
          note={note}
          onUpdate={onUpdateNote}
          onDelete={onDeleteNote}
        />
      ))}
    </div>
  )
}

export default NotesList
