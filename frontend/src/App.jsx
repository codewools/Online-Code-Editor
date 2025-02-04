import React, { useState } from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';
import Navbar from './components/Navbar';
const App = () => {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="">
      <Navbar />
      <div className='flex w-full justify-between'>
      <div className="">
        <div className="border-1 border-gray-300 w-200">
          <h1 className='float-left'>HTML</h1>
          <h2 className='cursor-pointer' onClick={() => setIsVisible(!isVisible)}>{isVisible ? ' X' : 'Show content'}</h2>
      {
        isVisible &&<Editor language="html" value={html} onChange={setHtml} />
      }
          
        </div>
       
      </div>
      <div className="w-300   " >
        <Preview html={html} css={css} js={js} />
      </div>
      </div>
    </div>
  );
};

export default App;