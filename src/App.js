// import logo from './logo.svg';
 import './App.css';
// // import App from './component/App';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
        
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState('white');

  const toggleBackgroundColor = () => {
    setBackgroundColor(prevColor => prevColor === 'white' ? 'lightgray' : 'lightblue' );
  };

  return (
    <div className='toggle'>
    <div style={{ backgroundColor: backgroundColor, height: '100vh' }}>
      <button onClick={toggleBackgroundColor}>Toggle Background Color</button>
    </div>
    </div>
  );
};

export default App;

