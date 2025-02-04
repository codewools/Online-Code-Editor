import React from 'react';

const Preview = ({ html, css, js }) => {
  const iframeContent = `
    <html>
      <head>
        <style>${css}</style>
      </head>
      <body>
        ${html}
        <script>${js}</script>
      </body>
    </html>
  `;

  return (
    <iframe
      title="preview"
      srcDoc={iframeContent}
      className="w-full h-full border-none"
    />
  );
};

export default Preview;