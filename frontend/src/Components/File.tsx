import React from 'react';

export interface IFile {
  name: string;
  uploadedDate: string;
  size: string;
  url: string;
}

function File({
  name, uploadedDate, size, url,
}: IFile) {
  return (
    <div className="bg-white p-3 my-3 rounded-xl">
      <a href={url} className="underline italic text-blue-600 cursor-pointer hover:text-blue-800">
        {name}
      </a>
      <div className="flex justify-between flex-col sm:flex-row">
        <p>
          Uploaded:
          <span className="px-1">{uploadedDate}</span>
        </p>
        <p>
          Size:
          <i className="px-1">{size}</i>
        </p>
      </div>
    </div>
  );
}

export default File;
