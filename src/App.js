import { useState } from 'react';
import './styles.css'

function App() {
  const [state, setState] = useState("foo");

  const handleClick = () => {
    if (state === 'foo') setState('bar');
    else setState('foo');
  }
  return (
    <div className='center'>
      <img className='glow' src="react.svg" width={150} height={150}/>
      <h1>A barehand react app configured with Babel and Webpack</h1>
      <p className='asdf'>Now is the time for all good men to come to the aid of their country.</p>
      <p>State: {state}</p>
      <button onClick={handleClick}>change</button>
    </div>
  )
}

export default App;
