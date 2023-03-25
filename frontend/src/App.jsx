import React, { useState, useMemo } from 'react';
import Router from './Router';
import LinkContext from './contexts/LinkContext';

function App() {
  const [linkedin, setLinkedin] = useState('');
  const [github, setGithub] = useState('');

  const linkContextValue = useMemo(() => ({
    linkedin,
    setLinkedin,
    github,
    setGithub,
  }), [linkedin, setLinkedin, github, setGithub]);

  return (
    <LinkContext.Provider value={linkContextValue}>
      <Router />
    </LinkContext.Provider>

  );
}

export default App;
