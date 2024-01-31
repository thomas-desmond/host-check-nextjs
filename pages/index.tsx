import { Inter } from "next/font/google";
import HomepageLink from "@/component/homepageLink";

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
        <HomepageLink pageLink="static" pageTitle="getStaticProps()" pageDescription="Can a page be statically generated (SSG)?" />
        <HomepageLink pageLink="server" pageTitle="getServerSideProps()" pageDescription="Can a page be server rendered (SSR)?" />
        <HomepageLink pageLink="image-optimization" pageTitle="Image Optimization" pageDescription="Are images using the Next/Image component optimized?" />
        <HomepageLink pageLink="incremental-static-regeneration" pageTitle="Incremental Static Regeneration (ISR)" pageDescription="Does Incremental Static Regeneration (ISR) work?" />
      </div>
    </main>
  );
}
