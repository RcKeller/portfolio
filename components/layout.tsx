import React from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import config from "../lib/config"

// import Nav from "./Nav/nav";
import Menu from "./Menu/menu";

const Layout = ({ children }) => {
  const router = useRouter()
  const isRootPath = router.asPath === "/"
  const title = config.title
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link href="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" href="/">
        {title}
      </Link>
    )
  }

  const [menuActive] = React.useState(false);
  const [lightMode] = React.useState(true);


  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <div className={`layout ${menuActive ? "menu-open" : ""} ${lightMode ? "light-mode" : ""}`}>
      <header className="global-header">{header}</header>
      {/* <Menu /> */}
      <main className="main-container">
        {/* <Nav /> */}
        <div className={`template ${menuActive ? "menu-open" : ""}`}>
        {children}
        </div>
      </main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://nextjs.org">Next.js</a>
      </footer>
      </div>
    </div>
  )
}

export default Layout
