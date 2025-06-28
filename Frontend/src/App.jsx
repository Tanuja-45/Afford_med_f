import React, { useState } from 'react';
import UrlForm from './assets/components/UrlForm';
import UrlInfo from './assets/components/UrlInfo';
import './App.css';

function App() {
  const [urlData, setUrlData] = useState(null);

  return (
    <div className="App">
      <h1>URL Shortener</h1>
      <UrlForm setUrlData={setUrlData} />
      <UrlInfo urlData={urlData} />
    </div>
  );
}

export default App;
