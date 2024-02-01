import Image from 'next/image'
import { useEffect, useState } from 'react';

export default function Page() {

    const [optimizedSizeInKb, setOptimizedSizeInKb] = useState(null as number | null);

    useEffect(() => {
        const imageElement = document.getElementById('image') as HTMLImageElement;
        getFileSize(imageElement.src);
    }, []);

    return (
        <main className="h-full flex flex-col justify-center items-center">
                <p className="text-5xl underline">Testing Next/Image Optimization</p>
                <div className="flex mt-8">
                    <p className="text-2xl">Original Size:</p>
                    <div id="original" className='text-2xl'>154</div>
                    <p className="text-2xl">kb</p>
                </div>

                {optimizedSizeInKb !== null && (
                    <div className="flex">
                        <p className="text-2xl">Optimized Size:</p>
                        <div id="optimized" className='text-2xl text-red-600'>{optimizedSizeInKb.toFixed(2)}</div>
                        <p className="text-2xl">kb</p>
                    </div>
                )}

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
                setOptimizedSizeInKb(fileSizeInKB);
            })
            .catch(error => {
                console.error('Error fetching image:', error);
                throw error;
            });
    }
}

