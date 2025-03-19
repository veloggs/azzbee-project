export const loadNotes = () => {
  try {
    const notes = localStorage.getItem('notes')
    return notes ? JSON.parse(notes) : []
  } catch (error) {
    console.error('Error loading notes:', error)
    return []
  }
}

export const saveNotes = (notes) => {
  try {
    localStorage.setItem('notes', JSON.stringify(notes))
  } catch (error) {
    console.error('Error saving notes:', error)
  }
}
