import Image from 'next/image'
import { useEffect, useState } from 'react';

let optimizedSizeInKb = 0;

export default function Page() {

    const [optimizedSizeInKb, setOptimizedSizeInKb] = useState(0);

    useEffect(() => {
        const imageElement = document.getElementById('image') as HTMLImageElement;
        getFileSize(imageElement.src)
            .then(sizeInfo => {
                console.log(`File size:${sizeInfo.kilobytes} KB`);
                setOptimizedSizeInKb(sizeInfo.kilobytes);
            });
    }, []);


    return (
        <main>
            <div>
                <p className="text-2xl">Original Size: 154 kb</p>
                <p className="text-2xl">Optimized Size: {optimizedSizeInKb.toFixed(2)} kb</p>
            </div>
            <Image
                id="image"
                src="/large-image.jpg"
                alt="Sample Code"
                onLoadingComplete={(img) => getFileSize(img.src)}
                width={1000}
                height={667}
            />
            <p>
                Photo by <a href="https://unsplash.com/@jameswiseman?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">James Wiseman</a> on <a href="https://unsplash.com/photos/a-computer-screen-with-a-program-running-on-it-imgCpfIMoRw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
            </p>
        </main>
    )
}

function getFileSize(url: string): Promise<SizeInfo> {
    console.log(url);
    return fetch(url)
        .then(response => {
            const contentLengthHeader = response.headers.get('Content-Length');
            if (contentLengthHeader) {
                const fileSizeInBytes = parseInt(contentLengthHeader, 10);
                const fileSizeInKB = fileSizeInBytes / 1024;

                return {
                    bytes: fileSizeInBytes,
                    kilobytes: fileSizeInKB,
                };
            } else {
                return Promise.reject('Content-Length header not found in the response.');
            }
        })
        .catch(error => {
            console.error('Error fetching image:', error);
            throw error;
        });
}

interface SizeInfo {
    bytes: number;
    kilobytes: number;
}
