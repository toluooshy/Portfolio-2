import "./Home.css";

import headshot from "../media/headshot.png";
import linkedin from "../media/linkedin.png";
import github from "../media/github.png";
import mastodon from "../media/mastodon.png";
import bluesky from "../media/bluesky.png";
import resume from "../media/cv.png";
import resumePdf from "../media/resume.pdf";
import princeton from "../media/princeton.png";
import princetonPdf from "../media/princeton.pdf";
import olin from "../media/olin.png";
import olinPdf from "../media/olin.pdf";

export default function Home() {
  return (
    <main className="home">
      <section className="hero">
        <img
          src={headshot}
          alt="Tolulope Oshinowo monochrome headshot."
          className="site-logo"
        />
      </section>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: -40,
          marginBottom: 20,
        }}
      >
        <LinkItem icon={resume} href={resumePdf}></LinkItem>
        <LinkItem
          icon={linkedin}
          href="https://www.linkedin.com/in/tolulope-oshinowo"
        ></LinkItem>
        <LinkItem icon={github} href="https://github.com/toluooshy"></LinkItem>
        <LinkItem
          icon={mastodon}
          href="https://micro.blogs.princeton.edu/@tolu"
        ></LinkItem>
        <LinkItem
          icon={bluesky}
          href="https://bsky.app/profile/toshinowo.co"
        ></LinkItem>
        <LinkItem icon={princeton} href={princetonPdf}></LinkItem>
        <LinkItem icon={olin} href={olinPdf}></LinkItem>
      </div>

      <section className="intro">
        <p>
          Hi — I'm <strong>Tolulope Oshinowo</strong>, a Master's student in
          Computer Science at Princeton University and a former ECE graduate of
          Olin College. My work sits at the intersection of software
          engineering, applied research, and public-facing technology.
          <br />
          <br />
          I'm particularly interested in building systems that balance technical
          rigor with human impact — spanning compliance infrastructure,
          financial technology, sustainability research, and user-controlled
          platforms. Outside of engineering, I'm deeply curious about how
          technology interacts with policy, markets, and everyday
          decision-making. In my free time, I enjoy producing music, sketching
          early-stage product ideas, and staying active through sports.
        </p>
      </section>
    </main>
  );
}

function LinkItem({ icon, href, children }) {
  return (
    <a className="link-item" href={href} target="_blank" rel="noreferrer">
      {icon && <img src={icon} alt="" />}
    </a>
  );
}
