import React from "react";
import Head from "next/head";
import Container from "../../components/container";
import Header from "../../components/header";

export default function Programs() {
  return (
    <Container>
      <Head>
        <title>{"St. Paul's Community Church Programs"}</title>
        <meta
          name="description"
          content="The Programs of St. Pauls Community Church in Lakewood, Colorado"
        />
        <meta
          name="keywords"
          content="christian, church, jesus, christ, lakewood, colorado, worship, communion, community, st, pauls, denver, programs"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Header />
        <h1>Programs</h1>
      </main>
    </Container>
  );
}
