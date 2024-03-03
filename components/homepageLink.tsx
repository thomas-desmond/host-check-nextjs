import Link from "next/link";

interface HomePageLinkProps {
    pageLink: string;
    pageTitle: string;
    pageDescription: string;
    id?: string;
    locale?: string;
}

export default function HomepageLink({pageLink, pageTitle, pageDescription, id, locale }: HomePageLinkProps) {
    return (
        <Link
            id={id ? id : pageLink}
            href={`/feature/${pageLink}`}
            locale={locale ? locale : 'en-US'}
        >
            <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                <h2 className={`mb-3 text-xl font-semibold`}>
                    {pageTitle}
                </h2>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-gray-200`}>
                    {pageDescription}
                </p>
            </div>
        </Link>
    )
}