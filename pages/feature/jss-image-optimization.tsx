import { NextImage } from '@sitecore-jss/sitecore-jss-nextjs';
import { useEffect, useState } from 'react';

let imageFromEdge = {
  "value": {
    "src": "https://edge.sitecorecloud.io/sitecoresaa94c3-xmcloudintr2ef7-production-9f57/media/Project/Sugcon/shared/man-with-phone-and-umbrella.jpg?h=392&iar=0&w=707",
    "alt": "",
    "width": "707",
    "height": "392"
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
          <div id="original" className='text-2xl'>87</div>
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
        width={707}
        height={392}
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
