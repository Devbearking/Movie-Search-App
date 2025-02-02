import Link from "next/link";
import LogoImg from "@/assets/logo.png";
import Image from "next/image";

import classes from "./main-header.module.scss";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href={"/"}>
          <Image src={LogoImg} alt="A plate with food" priority />
          Rotten Potato
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href={"/movie-catalogue"}>Movie Catalogue</NavLink>
            </li>
            <li>
              <NavLink href={"/favorites"}>Favorite Movies</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
