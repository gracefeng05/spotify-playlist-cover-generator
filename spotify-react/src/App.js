import './App.css'
import React from 'react';

function App() {
    const CLIENT_ID = "07897cb6f60244ef874591bd3774b558"
    const REDIRECT_URI = "http://localhost:3000"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"

  return (
    <div className="App">
        <header className="App-header">
            <h1>Spotify React</h1>
            <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
        </header>
    </div>
  );
}

export default App;