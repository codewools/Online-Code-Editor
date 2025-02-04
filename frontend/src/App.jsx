import React, { useState } from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';
import Navbar from './components/Navbar';
const App = () => {
  const [html, setHtml] = useState(`<html>
    <head>
        <title>Basic HTML Page</title>
    </head>
    <body>
      <div style="text-align: center">
        <h1>Hey, this is the heading for the page</h1>
      </div>
      <div style="text-align: center">
        <p>This is a part of main content area of the page. I can hold any content of any length here</p>
      </div>
      <div style="text-align: right">
        <p>This is the content for right sidebar</p>
      </div>
      <div style="text-align: center; bottom: 0">
        <p>This is the basic footer content</p>
      </div>
    </body>
</html>`);
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="">
      <Navbar />
      <div className='flex w-full justify-between'>
      <div className="">
        <div className="border-1 border-gray-300 w-200 justify-between">
          <h2 className='cursor-pointer  ' onClick={() => setIsVisible(!isVisible)}>HTML {isVisible ? ' X' : 'Show content'}</h2>
      {
        isVisible &&<Editor language="html" value={html} onChange={setHtml} />
      }
          <h2 className='cursor-pointer  ' onClick={() => setIsVisible(!isVisible)}>{isVisible ? ' X' : 'Show content'}</h2>
      {
        isVisible &&<Editor language="css" value={html} onChange={setHtml} />
      }
          
        </div>
       
      </div>
      <div className="w-300  h-200 " >
        <Preview html={html} css={css} js={js} />
      </div>
      </div>
    </div>
  );
};

export default App;