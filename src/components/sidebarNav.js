import { Fragment } from "react";
import {LinkedInIcon} from "../assets/linkedin.png"
import {EmailRoundedIcon} from "../assets/mail.png"
import {GitHubIcon} from "../assets/github.png"
export function SidebarNav() {
    return(
        <Fragment>
  <div>
    <a href="/">/home</a>
    <a href="#about">/sobre mim</a>
    <a href="#projects">/projetos</a>
    <a href="#experience">/experiência</a>
  </div>
  <div className="sidebar-logos" href="/">
  <a href="mailto:beatriz.fbcarneiro@gmail.com">
    <EmailRoundedIcon style={{ fontSize: 20 }}></EmailRoundedIcon>
  </a>
  <a href="https://github.com/ibtriz">
    <GitHubIcon style={{ fontSize: 19 }}></GitHubIcon>
  </a>
  <a href="https://www.linkedin.com/in/beatriz-francelino-borges-carneiro">
    <LinkedInIcon style={{ fontSize: 21 }}></LinkedInIcon>
  </a>
</div>
</Fragment>
);
}
