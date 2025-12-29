import "./Home.css";
import logo from "../media/toshinowo.png";

/* optional icons if you have them */
import coinbase from "../media/coinbase.png";
import kairos from "../media/kairoslogo.png";
import antenna from "../media/antenna.png";
import noodles from "../media/noodles.png";
import wellesley from "../media/wellesley.png";
import wobble from "../media/wobblefinance.png";
import hipster from "../media/hipstertrek.png";
import storyboard from "../media/storyboard.png";

export default function Home() {
  return (
    <main className="home">
      <section className="hero">
        <h1>Hello!</h1>
        <img src={logo} alt="toshinowo.co logo" className="site-logo" />
      </section>

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
      <span>{children}</span>
    </a>
  );
}
