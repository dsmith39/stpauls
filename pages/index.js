import Head from "next/head";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>{"St. Paul's Community Church"}</title>
        <meta
          name="description"
          content="St. Paul's Community Church in Lakewood, Colorado Worshiping Jesus Christ"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}></main>
    </>
  );
}
