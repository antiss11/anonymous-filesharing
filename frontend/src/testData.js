function generateFileData() {
  const files = [];
  for (let i = 0; i <= 10; i += 1) {
    files.push({
      name: 'myfile1',
      size: '2MB',
      url: 'https://ya.ru',
      uploadedDate: 'yesterday',
    });
  }
  return files;
}

const files = JSON.stringify(generateFileData());
export default files;
