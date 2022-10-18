interface Props {
  name: string;
  uploadedDate: string;
  size: string;
}

function File({name, uploadedDate, size}: Props) {
  return (
    <div className="bg-white p-3 rounded-xl">
      <a className="underline italic text-blue-600 cursor-pointer hover:text-blue-800">
        {name}
      </a>
      <div className="flex justify-between">
        <p>Uploaded: 
          <span className="px-1">{uploadedDate}</span>
        </p>
        <p>Size:
          <i className="px-1">{size}</i>
        </p>
      </div>
  </div>)
}

export default File;