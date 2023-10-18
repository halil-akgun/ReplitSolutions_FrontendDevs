import React from 'react'

const Sidebar = () => {
  const imageUrls = [];
  for (let i = 0; i < 10; i++) {
    imageUrls.push(`https://picsum.photos/id/1${i}/200/130`);
  }

  return (
    <div className='d-flex flex-column gap-4 p-3'>
      {imageUrls.map((imageUrl, index) => (
        <img key={index} src={imageUrl} alt="" />
      ))}
    </div>
  );
}

export default Sidebar