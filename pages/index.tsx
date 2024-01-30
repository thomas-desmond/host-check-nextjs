import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}
    >
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Click a link to test if it's working in your hosting environment
        </p>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <Link
            href="/static"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
          <h2 className={`mb-3 text-xl font-semibold`}>
            getStaticProps()
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Can a page be statically rendered (SSG)?
          </p>
        </Link>

        <Link
            href="/server"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
          <h2 className={`mb-3 text-xl font-semibold break-words`}>
            getServerSideProps()
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Can a page be server rendered (SSR)?
          </p>
        </Link>

        <Link
            href="/image-optimization"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
          <h2 className={`mb-3 text-xl font-semibold break-words`}>
            Image Optimization
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Are images using the Next/Image component optimized?
          </p>
        </Link>
        <Link
            href="/incremental-static-regeneration"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
          <h2 className={`mb-3 text-xl font-semibold break-words`}>
            Incremental Static Regeneration (ISR)
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Does Incremental Static Regeneration (ISR) work?
          </p>
        </Link>
      </div>
    </main>
  );
}
