import React from "react";
import { useState } from "react";
//Component Imports
import Modal from "../modal";
import Link from "next/link";
import styles from "./header.module.scss";

function Header() {
  const [openNav, setOpenNav] = useState(false);

  function handleNav() {
    if (openNav == true) {
      setOpenNav(false);
    }
    if (openNav == false) {
      setOpenNav(true);
    }
  }
  function MobileMenu() {
    return (
      <Modal>
        <p className={styles.closeButton} onClick={handleNav}>
          X
        </p>
        <h1 className={styles.heading}>Menu</h1>
        <nav className={styles.navBar}>
          <Link onClick={handleNav} href={"/"} className={styles.link}>
            Home
          </Link>
          <Link onClick={handleNav} href={"/projects"} className={styles.link}>
            Projects
          </Link>
          <Link onClick={handleNav} href={"/about"} className={styles.link}>
            About
          </Link>
          <Link onClick={handleNav} href={"/hire-me"} className={styles.link}>
            Hire Me!
          </Link>
        </nav>
      </Modal>
    );
  }

  function MenuIcon() {
    return (
      <div onClick={handleNav} className={styles.menuContainer}>
        <div />
        <div />
        <div />
      </div>
    );
  }

  return (
    <>
      <header className={styles.headerDesktop}>
        <Link href={"/"} className={styles.link}>
          Home
        </Link>
        <Link href={"/bulletin"} className={styles.link}>
          Bulletin
        </Link>
        <Link href={"/programs"} className={styles.link}>
          Programs
        </Link>
        <Link href={"/calendar"} className={styles.link}>
          Calendar
        </Link>
        <Link href={"/events"} className={styles.link}>
          Events
        </Link>
        <Link href={"/believe"} className={styles.link}>
          We Believe
        </Link>
        <Link href={"/outreach"} className={styles.link}>
          Outreach
        </Link>
        <Link href={"/pastor"} className={styles.link}>
          Pastor
        </Link>
      </header>

      <header className={styles.headerMobile}>
        {openNav ? <MobileMenu closeModal={handleNav} /> : null}
        <h1>{"St. Paul's Community Church"}</h1>
        <MenuIcon click={handleNav} />
      </header>
    </>
  );
}

export default Header;
