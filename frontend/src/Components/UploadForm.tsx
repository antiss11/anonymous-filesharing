import React, { FormEvent } from 'react';
import { FileWithPath } from 'react-dropzone';
import Dropzone, { IFile } from './Dropzone';

export type SubmitEvent = FormEvent<HTMLFormElement>;

export type HandleSubmit = {
  (e: SubmitEvent): void;
};

export type HandleDrop = {
  (file: FileWithPath): void;
};

type Props = {
  handleSubmit: HandleSubmit;
  handleDrop: HandleDrop;
  file: IFile;
};

export function UploadForm({ handleSubmit, handleDrop, file }: Props) {
  return (
    <form
      onSubmit={handleSubmit}
      className="py-5 flex items-center flex-col sm:flex-col justify-center w-4/5"
    >
      <Dropzone handleDrop={handleDrop} file={file} />
      {file && (
        <>
          <div className="my-4">
            <label htmlFor="is-anon" className="flex">
              <input
                type="checkbox"
                name="isAnon"
                id="is-anon"
                className="mx-3 w-5 h-5"
              />
              Anonymous
            </label>
          </div>
          <input
            type="submit"
            value="Upload"
            className="cursor-pointer bg-red-300 hover:bg-red-500 px-10 py-2 rounded-2xl w-auto"
          />
        </>
      )}
    </form>
  );
}
