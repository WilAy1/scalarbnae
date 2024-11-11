import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(()=>{
    alert(window.innerWidth)
  }, [])
  return (
    <div className="App bg-[#2B50AA] w-full min-h-screen">
      <div className='bg-[#FCFCFC] w-full rounded-[20px]'></div>
    </div>
  );
}

export default App;

