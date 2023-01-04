import Head from "next/head";
import Header from "../components/header";
import Container from "../components/container";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>{"St. Paul's Community Church"}</title>
        <meta
          name="description"
          content="St. Paul's Community Church in Lakewood, Colorado Worshiping Jesus Christ"
        />
        <meta
          name="keywords"
          content="christian, church, jesus, christ, lakewood, colorado, worship, communion, community, st, pauls, denver, believe"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <Header />
        <h1>Landing</h1>
      </main>
    </Container>
  );
}
