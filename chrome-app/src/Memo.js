// Memo.js
import React, { useState, useEffect } from 'react';

const Memo = () => {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState('');

  const handleAddNote = () => {
    if (noteText.trim() !== '') {
      setNotes((prevNotes) => [...prevNotes, noteText]);
      setNoteText('');
    }
  };

  const handleDeleteNote = (index) => {
    setNotes((prevNotes) => prevNotes.filter((_, i) => i !== index));
  };

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  return (
    <div className="memo-container">
      <div className="memo-input">
        <textarea
          placeholder="Write your note here..."
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
        />
        <button onClick={handleAddNote}>Add</button>
      </div>
      <div className="memo-notes">
        {notes.map((note, index) => (
          <div key={index} className="memo-note">
            <p>{note}</p>
            <button onClick={() => handleDeleteNote(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Memo;
