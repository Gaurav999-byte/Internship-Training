import React, { useState, useEffect } from 'react';
import usersData from './users.json';
import './App.css';

const USERS_PER_PAGE = 3;

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    setUsers(usersData);
    // For debugging
    console.log('Loaded users from local JSON:', usersData);
  }, []);

  const filtered = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  const maxPage = Math.max(1, Math.ceil(filtered.length / USERS_PER_PAGE));

  useEffect(() => {
    if (page > maxPage) setPage(maxPage);
  }, [page, maxPage]);

  useEffect(() => setPage(1), [search]);

  const displayed = filtered.slice(
    (page - 1) * USERS_PER_PAGE,
    page * USERS_PER_PAGE
  );

  const prevPage = () => setPage(p => Math.max(1, p - 1));
  const nextPage = () => setPage(p => Math.min(maxPage, p + 1));

  return (
    <div className="App">
      <h1>User Directory</h1>
      <input
        placeholder="Search users by name..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{ marginBottom: '1rem' }}
      />
      <ul>
        {displayed.length === 0 ? (
          <li>No users found.</li>
        ) : (
          displayed.map(user => (
            <li key={user.id}>
              <strong>{user.name}</strong> ({user.username})<br />
              <span>{user.email}</span>
            </li>
          ))
        )}
      </ul>
      <div style={{ marginTop: '1rem' }}>
        <button onClick={prevPage} disabled={page === 1}>Prev</button>
        <span style={{ margin: '0 10px' }}>Page {page} of {maxPage}</span>
        <button onClick={nextPage} disabled={page === maxPage}>Next</button>
      </div>
    </div>
  );
}

export default App;
