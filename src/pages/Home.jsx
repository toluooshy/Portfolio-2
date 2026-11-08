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
          Hi — I'm <strong>Tolulope Oshinowo</strong>, a computer scientist,
          software engineer, and researcher with a background in Computer
          Science from Princeton University and Electrical and Computer
          Engineering from Olin College. My work spans human-computer
          interaction, applied AI, and open-source software, with a particular
          interest in how emerging technologies can better serve the people and
          communities they affect.
          <br />
          <br />
          I've worked across industry and academia, from building internal AI
          tools and compliance infrastructure to researching decentralized
          social media, user agency, and the politics of technology. More
          recently, I've been exploring local AI systems and new ways of making
          software creation more accessible through projects like{" "}
          <a
            href="https://thistle.earth"
            target="_blank"
            rel="noopener noreferrer"
          >
            Thistle
          </a>{" "}
          and{" "}
          <a
            href="https://partial.live"
            target="_blank"
            rel="noopener noreferrer"
          >
            Partial
          </a>
          . Across these efforts, I'm interested in building technically
          rigorous systems while asking broader questions about who controls
          them, how they're used, and whose needs they serve.
          <br />
          <br />
          Outside of engineering and research, I enjoy producing music,
          sketching early-stage product ideas, and staying active through
          sports.
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
