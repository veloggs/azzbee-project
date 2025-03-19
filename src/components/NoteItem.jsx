import React, { useState } from 'react'
import './NoteItem.css'

function NoteItem({ note, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editedTitle, setEditedTitle] = useState(note.title)
  const [editedContent, setEditedContent] = useState(note.content)

  const handleSave = () => {
    onUpdate({
      ...note,
      title: editedTitle,
      content: editedContent
    })
    setIsEditing(false)
  }

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  }

  return (
    <div className="note-item">
      {isEditing ? (
        <div className="note-edit">
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="note-title-input"
          />
          <textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            className="note-content-input"
          />
          <div className="note-actions">
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </div>
      ) : (
        <>
          <h3>{note.title}</h3>
          <p className="note-content">{note.content}</p>
          <div className="note-footer">
            <span className="note-date">
              {formatDate(note.lastModified)}
            </span>
            <div className="note-actions">
              <button onClick={() => setIsEditing(true)}>Edit</button>
              <button onClick={() => onDelete(note.id)}>Delete</button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default NoteItem
