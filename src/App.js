import React, { Suspense } from 'react';
import ThreeD from './3d';
import './App.css';

function App() {
  return (
    <div className="World">
      <Suspense fallback="loading">
        <ThreeD />
      </Suspense>
    </div>
  );
}

export default App;
