import React from 'react';
import File, { IFile } from './File';

interface Props {
  files: Array<IFile>;
}

function LastUploadedFiles({ files }: Props) {
  const filesElements = files.map((file) => (
    <File name={file.name} uploadedDate={file.uploadedDate} size={file.size} url={file.url} />
  ));
  return (
    <div className="md:w-1/2 bg-blue-500 overflow-y-auto">
      <h2 className="text-3xl py-3 text-white">Recently added:</h2>
      <div className="p-6">
        {filesElements}
      </div>
    </div>
  );
}

export default LastUploadedFiles;
