import React, { useCallback } from 'react';
import { FileWithPath, useDropzone } from 'react-dropzone';

export type IFile = FileWithPath | null;

interface Props {
  handleDrop: (file: FileWithPath) => void;
  file: IFile;
}

export default function Dropzone({ handleDrop, file }: Props) {
  const onDrop = useCallback((files: Array<File>) => {
    // Array with single File
    handleDrop(files[0]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    onDrop,
  });

  const classNames = [
    'px3',
    'word-wrap',
    file && 'text-black/100',
    file && 'font-bold',
    file || 'text-black-40',
  ].join(' ');

  return (
    <section className="container w-5/6 bg-white outline-dashed outline-2 outline-gray-400">
      <div {...getRootProps({ className: 'dropzone py-16 cursor-pointer' })}>
        <input {...getInputProps()} />
        <p
          className={classNames}
        >
          {file ? file.path : 'Drop file here, or click to select'}
        </p>
      </div>
    </section>
  );
}
