const express = require('express');
const app = express();
const port = 3000;

let notes = [];
let idCounter = 1;

app.use(express.json());

app.get('/notes', (req, res) => {
  let result = [...notes];
  if (req.query.search) {
    const search = req.query.search.toLowerCase();
    result = result.filter(
      n =>
        (n.title && n.title.toLowerCase().includes(search)) ||
        (n.text && n.text.toLowerCase().includes(search))
    );
  }
  res.json(result);
});

app.get('/notes/:id', (req, res) => {
  const note = notes.find(n => n.id === parseInt(req.params.id));
  if (!note) return res.status(404).json({ error: 'Note not found' });
  res.json(note);
});

app.post('/notes', (req, res) => {
  const { title, text, completed=false, pinned=false } = req.body;
  if (!text) {
    return res.status(400).json({ error: 'Note must have a "text" field.' });
  }
  const now = new Date().toISOString();
  const note = {
    id: idCounter++,
    title: title || "",
    text,
    completed,
    pinned,
    createdAt: now,
    updatedAt: now
  };
  notes.push(note);
  res.status(201).json(note);
});

app.put('/notes/:id', (req, res) => {
  const note = notes.find(n => n.id === parseInt(req.params.id));
  if (!note) return res.status(404).json({ error: 'Note not found' });
  const { title, text, completed, pinned } = req.body;
  if (title !== undefined) note.title = title;
  if (text !== undefined) note.text = text;
  if (completed !== undefined) note.completed = completed;
  if (pinned !== undefined) note.pinned = pinned;
  note.updatedAt = new Date().toISOString();
  res.json(note);
});

app.delete('/notes/:id', (req, res) => {
  const index = notes.findIndex(n => n.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Note not found' });
  const deleted = notes.splice(index, 1);
  res.json({ message: 'Note deleted', note: deleted[0] });
});

app.listen(port, () => {
  console.log(`Notes server running on http://localhost:${port}`);
});
