import React, { FormEvent } from 'react';

export type SubmitEvent = FormEvent<HTMLFormElement>;

export type HandleSubmit = {
  (e: SubmitEvent): void;
};

type Props = {
  handleSubmit: HandleSubmit;
};

export function UploadForm({ handleSubmit }: Props) {
  return (
    <form onSubmit={handleSubmit} className="py-5 flex items-center flex-col sm:flex-col justify-center md:w-1/2 bg-yellow-200">
      <div className="bg-orange-200 p-4 rounded-xl">
        <div className="flex flex-col items-center">
          <input type="file" name="file" className="" />
          <label htmlFor="is-anon" className="align-middle flex items-center my-3">
            <input type="checkbox" name="isAnon" id="is-anon" className="mx-3 w-5 h-5" />
            Anonymous
          </label>
        </div>
        <input
          type="submit"
          value="Upload"
          className="cursor-pointer bg-red-300 hover:bg-red-500 px-10 py-2 rounded-2xl w-auto"
        />
      </div>
    </form>
  );
}
