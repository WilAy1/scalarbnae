import { useEffect } from 'react';
import './App.css';
import Header from './header';

function App() {
  return (
    <div className="App bg-[#2B50AA] w-full min-h-screen p-[1.667vw]">
      <Header />
      <div className='py-[1.458vw]'>
        <div className='w-full flex items-center gap-[]'>
          <div className='bg-[#FCFCFC] p-[1.667vw] rounded-[1.389vw]'>
            <div className='font-satoshi italic text-[1.736vw]'>
              Two Passions, One Creative Mind:
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

