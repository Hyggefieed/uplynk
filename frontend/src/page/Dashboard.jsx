// src/page/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import { uploadNote, getNotesBySession } from '../services/firestoreService';

export default function Dashboard() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const sessionId = 'exampleSessionId'; // Replace with dynamic session ID later

  const fetchNotes = async () => {
    const result = await getNotesBySession(sessionId);
    setNotes(result);
  };

  const handleUpload = async () => {
    const noteData = {
      title,
      content,
      sessionId,
      createdAt: new Date().toISOString(),
    };
    await uploadNote(noteData);
    setTitle('');
    setContent('');
    fetchNotes();
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Dashboard</h1>

      <div className="space-y-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Note Title"
          className="w-full p-2 border rounded"
        />

        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Note Content"
          className="w-full p-2 border rounded h-32"
        />

        <button
          onClick={handleUpload}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Upload Note
        </button>
      </div>

      <ul className="mt-6 space-y-2">
        {notes.map((note) => (
          <li key={note.id} className="border p-3 rounded">
            <strong>{note.title}</strong>: {note.content}
          </li>
        ))}
      </ul>
    </div>
  );
}
