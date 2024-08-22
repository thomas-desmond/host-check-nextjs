import { NextImage } from '@sitecore-jss/sitecore-jss-nextjs';
import { useEffect, useState } from 'react';

let imageFromEdge = {
  "value": {
    "src": "https://images.thetombomb.com/cairn.jpg",
    "alt": "",
    "width": "1000",
    "height": "750"
  }
}

export default function Page() {
  const [jssOptimizedSizeInKb, setJssOptimizedSizeInKb] = useState(0);

  useEffect(() => {
    const imageElement = document.getElementById('jss-image-edge') as HTMLImageElement;
    getFileSize(imageElement.src);
}, []);


  return (
    <div className="h-full flex flex-col justify-center items-center">
      <div>
        <div className="flex mt-8">
          <p className="text-2xl">Original Size:</p>
          <div id="original" className='text-2xl'>330</div>
          <p className="text-2xl">kb</p>
        </div>
        <div className="flex">
          <p className="text-2xl">Optimized Size:</p>
          <div id="optimized" className='text-2xl text-red-600'>{jssOptimizedSizeInKb.toFixed(2)}</div>
          <p className="text-2xl">kb</p>
        </div>
      </div>
      <NextImage
        id="jss-image-edge"
        field={imageFromEdge}
        alt="man"
        unoptimized={false}
        width={1000}
        height={750}
      />
    </div>
  )

  function getFileSize(url: string) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.blob();
        })
        .then(blob => {
            const fileSize = blob.size;
            const fileSizeInKB = fileSize / 1024;
            setJssOptimizedSizeInKb(fileSizeInKB);
        })
        .catch(error => {
            console.error('Error fetching image:', error);
            throw error;
        });
  }
}
