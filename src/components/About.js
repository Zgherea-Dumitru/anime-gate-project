import { ReactComponent as Dum } from "./images/dum.svg";
import { ReactComponent as Sam } from "./images/sam.svg";
import { ReactComponent as Leo } from "./images/leo.svg";
import { ReactComponent as LinkdIn } from "./images/linkedin.svg";
import { ReactComponent as GitHub } from "./images/github.svg";
import "./styles/About.css";

export default function About() {
  return (
    <div className="about">
      <h1>Creators</h1>
      <div className="creators">
        <div className="person">
          <Sam className="person_logo" />
          <div className="person_content">
            <h1>Sam Anzifar</h1>
            <p>Developer</p>
            <div className="person_links">
              <LinkdIn className="contact_link" />
              <GitHub className="contact_link" />
            </div>
          </div>
        </div>
        <div className="person middle">
          <Dum className="person_logo" />
          <div className="person_content">
            <h1>Dumitru Zgherea</h1>
            <p>Developer</p>
            <div className="person_links">
              <LinkdIn className="contact_link" />
              <GitHub className="contact_link" />
            </div>
          </div>
        </div>
        <div className="person">
          <Leo className="person_logo" />
          <div className="person_content">
            <h1>Leopold Van Der Elst</h1>
            <p>Developer</p>
            <div className="person_links">
              <LinkdIn className="contact_link" />
              <GitHub className="contact_link" />
            </div>
          </div>
        </div>
      </div>
      <h1>API</h1>
      <div className="api">
        <div className="api_logo"></div>
        <a href="https://jikan.moe/" target="_blank">
          jikan.moe
        </a>
      </div>
    </div>
  );
}
