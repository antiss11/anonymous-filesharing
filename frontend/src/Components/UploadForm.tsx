import { FormEvent } from "react";

export type SubmitEvent = FormEvent<HTMLFormElement>;

export type HandleSubmit = {
  (e: SubmitEvent): void;
}

type Props = {
  handleSubmit: HandleSubmit;
}

export function UploadForm(props: Props) {
  return (
    <form onSubmit={props.handleSubmit} className="py-5">
      <input type="file" name="file" className="" />
      <input type="submit" value="Upload" className="cursor-pointer bg-red-300 hover:bg-red-500 px-5 py-2 rounded-2xl" />
    </form>
  )
}
