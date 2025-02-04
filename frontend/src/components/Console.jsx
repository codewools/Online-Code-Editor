import React, { useState, useEffect } from 'react';

const Console = ({ logs }) => {
  return (
    <div className="bg-black text-white p-4 h-40 overflow-y-auto">
      {logs.map((log, index) => (
        <pre key={index}>{log}</pre>
      ))}
    </div>
  );
};

export default Console;