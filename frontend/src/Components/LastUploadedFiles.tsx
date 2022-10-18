import File from "./File";

export interface IFile {
  name: string;
  uploadedDate: string;
  size: string;
}

interface Props {
  files: Array<IFile>;
}

function LastUploadedFiles(props: Props) {
  const files = props.files.map(file => (
    <File name={file.name} uploadedDate={file.uploadedDate} size={file.size} />
  ))
  return (
    <div>
      <h2 className="text-3xl py-3">Recently added:</h2>
      <div className="bg-blue-500 p-3">
        {files}
      </div>
    </div>
  )
}

export default LastUploadedFiles;