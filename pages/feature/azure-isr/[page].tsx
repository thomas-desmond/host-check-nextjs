import { GetStaticPaths, GetStaticProps } from "next"

export const getStaticPaths = (async () => {
    return {
      paths: [
        {
          params: {
            page: 'time',
          },
        }, // See the "paths" section below
      ],
      fallback: true, // false or "blocking"
    }
  }) satisfies GetStaticPaths

  export const getStaticProps = (async (context) => {
    const res = await fetch('http://worldtimeapi.org/api/timezone/America/Los_Angeles')
    const time = await res.json()
    return { props: { time }, revalidate: 10 }
  }) satisfies GetStaticProps<any>


  export default function Page({
    time,
  }: any) {
    console.log(time)
    return (
        <>
        Time: {time.datetime}
        </>
    )
  }