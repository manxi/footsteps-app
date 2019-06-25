import React from "react"
import { Link } from "gatsby"
import headerStyles from "./header.module.css"
import brandLogo from "../images/brand-logo.png"
export default () => (
  <header>
    <nav>
      <img className={headerStyles.logo} src={brandLogo} />
      <Link to={"/"}>Home</Link>
      <Link to={"/about/"}>About</Link>
      <Link to={"/auth/"}>Auth</Link>
      <Link to={"/profile/"}>Profile</Link>
    </nav>
  </header>
)
