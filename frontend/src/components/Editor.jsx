import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { javascript } from '@codemirror/lang-javascript';

const Editor = ({ language, value, onChange }) => {
  const extensions = {
    html: [html()],
    css: [css()],
    js: [javascript({ jsx: true })],
  };

  return (
    <CodeMirror className=' h-screen'
      value={value}
      height="100%"
      extensions={[extensions[language]]}
      onChange={onChange}
      theme="dark"
    />
  );
};

export default Editor;