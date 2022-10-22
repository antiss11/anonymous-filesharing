import React, { useState } from 'react';
import { UploadForm, SubmitEvent } from './Components/UploadForm';
import './App.css';
import files from './testData';
import LastUploadedFiles from './Components/LastUploadedFiles';
import { IFile } from './Components/Dropzone';

function App() {
  const [currentFile, setCurrentFile] = useState<IFile>(null);

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    console.log(currentFile);
  };

  const handleDrop = (file: any) => {
    setCurrentFile(file);
  };

  const filesData = JSON.parse(files);
  return (
    <div className="App md:flex h-screen">
      <div className="bg-yellow-200 flex flex-col items-center justify-center md:w-1/2">
        <UploadForm handleSubmit={handleSubmit} handleDrop={handleDrop} file={currentFile} />
      </div>
      <LastUploadedFiles files={filesData} />
    </div>
  );
}

export default App;
