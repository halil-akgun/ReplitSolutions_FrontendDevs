import React from 'react'

const Content = () => {
    const imageUrls = [];
    for (let i = 0; i < 16; i++) {
        imageUrls.push(`https://picsum.photos/id/1${i}/400/230`);
    }

    return (
        <div className='d-flex flex-wrap gap-4 p-3 justify-content-center'>
            {imageUrls.map((imageUrl, index) => (
                <img key={index} src={imageUrl} alt="" />
            ))}
        </div>
    );
}

export default Content