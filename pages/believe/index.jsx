import React from "react";
import Head from "next/head";
import Container from "../../components/container";
import Header from "../../components/header";

export default function Believe() {
  return (
    <Container>
      <Head>
        <title>{"St. Paul's Community Church Beliefs"}</title>
        <meta
          name="description"
          content="The Beliefs of St. Pauls Community Church in Lakewood, Colorado"
        />
        <meta
          name="keywords"
          content="christian, church, jesus, christ, lakewood, colorado, worship, communion, community, st, pauls, denver, believe"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Header />
        <h1>Beliefs</h1>
      </main>
    </Container>
  );
}
