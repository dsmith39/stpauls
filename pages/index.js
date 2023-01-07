import Head from "next/head";
import Image from "next/image";
import Header from "../components/header";
import React from "react";
import Heading from "../components/heading";
import Text from "../components/text";
import Container from "../components/container";
import CustomTable from "../components/tables";
import styles from "../styles/Home.module.scss";

export default function Home() {
  const newsRef = React.useRef(null);

  const handleScroll = (e) => {
    e.preventDefault();
    newsRef.current.scrollIntoView({
      behavior: "smooth",
      inline: "center",
    });
  };
  return (
    <Container>
      <Head>
        <title>St. Paul&apos;s Community Church</title>
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
      <main>
        <Header />
        <article className={styles.headingSection}>
          <Heading type={"h1"}>St. Paul&apos;s Community Church</Heading>
          <Text type={"p"}>
            Welcome to the St. Paul&apos;s Community Church Website!
          </Text>
          <section className={styles.downArrow}>
            <p>See More</p>
            <a onClick={handleScroll} href={"#newsSection"}>
              ⌄
            </a>
          </section>
        </article>
        <article
          ref={newsRef}
          id={"newsSection"}
          className={styles.newsSection}
        >
          <Heading type={"h2"}>Happy New Year!</Heading>
          <Text type={"p"}>
            We had two fabulous services for Christmas this year! Click here to
            watch our Christmas Eve Candlelight Service, featuring Lana singing
            a soaring, heart-felt &quot;O Holy Night&quot; and Connie playing a
            beautiful version of &quot;Mary Did You Know&quot;. It was a blessed
            evening! The Christmas Service is available here: Christmas Worship
            Service Click the Media Page link (above) for the links to our New
            Year&apos;s Day Worship Service as well as all our Worship Services
            and Bible Studies.
          </Text>
        </article>
        <article className={styles.callToWorship}>
          <Heading type={"h2"}>Our Morning Worship is at 10:00AM</Heading>
        </article>
        <figure className={styles.churchImageSection}>
          <Image
            alt={"Image of St. Paul's Community Church"}
            src={"/st_pauls_web.jpg"}
            width={800}
            height={600}
          />
          <Text type={"figcaption"}>St. Paul&apos;s Community Church</Text>
        </figure>
        <article className={styles.beliefSection}>
          <Heading type={"h2"}>We Believe!</Heading>
          <Text type={"p"}>
            We Believe in God the Father, God the Son, and God the Holy Spirit;
            and that the Bible is the inspired Word of God. We are a friendly,
            warm and welcoming congregation of between 75-85 people each Sunday.
            St. Paul&apos;s is a growing congregation and so excited to see what
            the Lord has planned for each new day! The people of St. Paul&apos;s
            are called to share the love of God. Our choir and our praise group
            provide a unique combination of both contemporary music and
            traditional hymns. Loving people, heartfelt music, and Pastor
            Kim&apos;s positive messages of Christ&apos;s love and our ongoing
            relationship with God combine to create a beautiful worship
            experience. If you will be in the Denver area, please feel free to
            stop by St. Paul&apos;s for Sunday Worship, Sunday School, Bible
            Study, or any of our special events! And if you already live in the
            area, stop by and see what all the excitement is about!
          </Text>
        </article>
        <article className={styles.whoSection}>
          <Heading type={"h2"}>Who are We?</Heading>
          <Text type={"p"}>
            St. Paul&apos;s Community Church was organized in 1894. It has ties
            to the Evangelical & Reformed and the Congregational and Christian
            churches which became the United Church of Christ in 1957. On
            September 4, 2005, St. Paul&apos;s voted to become an independent,
            nondenominational, Bible-based church. The initial congregation had
            a German heritage and St. Paul&apos;s was once a mission church. In
            the present days, St. Paul&apos;s tries hard to be a church in
            mission to our community and the world. Outreach is very important
            to the people of St. Paul&apos;s. We actively support a wide-range
            of people and programs, including the Jeffco Action Center, the
            Colorado Children&apos;s Home, the Women&apos;s Empowerment program,
            Coats for Colorado, World Vision, Feed the Children, Loving Hugs, a
            children&apos;s hospice and a mission outreach center in Curacao, a
            group of Christmas families, and others. To read more details about
            the outreach we provide, go to our Outreach Page!
          </Text>
        </article>
        <article className={styles.locationSection}>
          <Heading type={"h2"}>Where are We?</Heading>
          <figure>
            <Image
              alt={"Map of St. Paul's Community Church"}
              src={"/map.gif"}
              width={800}
              height={800}
            />
            <Text type={"figcaption"}>
              St. Paul&apos;s Community Church
              <br />
              8001 W. 23rd St.
              <br />
              Lakewood, CO 80214
              <br />
              303-237-4744
            </Text>
          </figure>
          <p className={styles.googleLink}>
            For more details click Google Maps
          </p>
        </article>
        <article className={styles.weeklyScheduleSection}>
          <Heading type={"h2"}>Weekly Service Schedule</Heading>
          <CustomTable type={"weeklyService"} />
        </article>
        <article className={styles.eventScheduleSection}>
          <Heading type={"h2"}>Event Schedule</Heading>
          <CustomTable type={"eventSchedule"} />
        </article>
      </main>
    </Container>
  );
}
