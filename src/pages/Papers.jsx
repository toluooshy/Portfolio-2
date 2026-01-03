import "./Papers.css";

export default function Papers() {
  return (
    <main className="papers">
      <header className="papers-header">
        <h2>Research, Writing, and Long-Form Work</h2>
      </header>

      <Paper
        title="Pantry: Reconceptualizing Social Media Feed Curation and Its Implications for User Agency"
        href="https://drive.google.com/file/d/1KtKQB8zzdEky_f414I7Dpk2J2MrIKP4X"
        meta="CHI (Under Review) · 2026"
        coauthors="Oshinowo, Marin Carabajo, Monroy-Hernández."
      >
        A systems and HCI research paper examining how social media feeds can be
        redesigned to prioritize user agency over engagement-driven
        optimization. The work introduces Pantry, a mobile app that enables
        user-authored feed curation through explicit, in-the-moment preference
        expression.
        <br />
        <br />
        Through surveys, activity log analysis, and debrief interviews, the
        study evaluates how users engage with and perceive intentional feed
        control. Findings suggest that user-authored feeds are both viable and
        welcomed, while also surfacing tensions between novel agency-centered
        designs and familiar social media conventions. The paper contributes a
        concrete implementation to ongoing HCI discussions around feed
        transparency, control, and alternative platform architectures.
      </Paper>

      <Paper
        title="Seeing the Politics of Decentralized Social Media Protocols"
        href="https://doi.org/10.48550/arXiv.2505.22962"
        meta="CSCW (Under Review) · 2026"
        coauthors="Oshinowo, Hwang, Zhang, Monroy-Hernández."
      >
        An academic paper examining how decentralized social media protocols
        operationalize power, control, and governance at the infrastructural
        level. The study analyzes ActivityPub, AT Protocol, Nostr, and Farcaster
        to develop a conceptual framework for understanding how decentralization
        is implemented in practice.
        <br />
        <br />
        Drawing on protocol documentation, media coverage, and interviews with
        protocol developers, the work frames protocols as socio-technical
        artifacts whose design decisions encode political values and shape
        platform governance and user agency.
      </Paper>

      <Paper
        title="CDCL Buddy: Demystifying SAT Solvers for Education"
        href="https://drive.google.com/file/d/1W7wIauSCGrhFQCeuBNbpbti1ROxuCnpc"
        meta="Princeton University · 2024"
        coauthors="Oshinowo."
      >
        A research and systems paper presenting CDCL Buddy, an interactive
        educational tool designed to make Conflict-Driven Clause Learning (CDCL)
        SAT solvers more approachable through dynamic visualizations and
        hands-on interaction.
        <br />
        <br />
        The work bridges theory and practice by allowing learners to explore
        conflict analysis, clause learning, and non-chronological backtracking
        in real time. An informal usability study evaluates the tool’s
        effectiveness across varying levels of prior familiarity, highlighting
        the role of tactile and visual interfaces in supporting computational
        learning.
      </Paper>

      <Paper
        title="Bay Street Climate Monitor: Tackling the Global Carbon Footprint of Toronto's Financial Industry"
        href="https://www.climateobservatory.ca/baystreetclimatemonitor"
        meta="Toronto Climate Observatory · 2024"
        coauthors="Oshinowo, Nesbitt-Jerman, Soden."
      >
        A research report analyzing the global financed emissions of Toronto's
        financial sector, with a focus on transparency, accountability, and
        climate risk exposure. Produced as part of the Toronto Climate
        Observatory's interdisciplinary climate research initiative.
        <br />
        <br />
        The work combines open financial data, emissions accounting
        methodologies, and reproducible calculations to assess the climate
        impact of capital markets, with all data and methods released publicly
        to support open research.
      </Paper>

      <Paper
        title='Fostering Social Connectivity by Digitizing the "Third Place"'
        href="https://drive.google.com/file/d/15pdyuEcbdyx0UHigSZ8FHkPdVtnsfHAO"
        meta="Princeton University · 2023"
        coauthors="Oshinowo."
      >
        A research paper exploring how virtual platforms can recreate the social
        function of physical “third places” to support spontaneous interaction
        and community formation in increasingly digital environments.
        <br />
        <br />
        The work introduces Avable, a group-based video communication platform
        that uses a multidimensional algorithm incorporating user interests,
        personality traits, and political orientation to structure virtual
        social spaces. The study examines both algorithmic design and user
        experience considerations, emphasizing meaningful connection,
        adaptability, and privacy-aware system design.
      </Paper>

      <Paper
        title="How do College Students Use ChatGPT to Learn to Code"
        href="https://drive.google.com/file/d/1jcoudDb6IsXPTy8mIIti0VDfcI2MLr8I"
        meta="Princeton University · 2025"
        coauthors="Zhang, Alicki, Zheng,Oshinowo."
      >
        A study investigating how university students leverage ChatGPT to learn
        programming. The research combines surveys of 108 students across 12
        institutions with detailed interviews and coding tasks in Rust to
        examine differences in tool usage across experience levels.
        <br />
        <br />
        Findings reveal that beginners rely heavily on ChatGPT for
        problem-solving, while experienced programmers critically evaluate
        outputs and identify errors. The work provides actionable insights for
        educators aiming to integrate AI tools responsibly into programming
        curricula.
      </Paper>
    </main>
  );
}

function Paper({ title, href, meta, coauthors, children }) {
  return (
    <article className="paper">
      <p
        style={{
          marginBottom: 4,
          fontStyle: "italic",
          color: "#555555",
          fontSize: 12,
        }}
      >
        {coauthors}
      </p>
      <h3 style={{ marginTop: 0 }}>
        <a href={href} target="_blank" rel="noreferrer">
          {title}
        </a>
      </h3>
      <p className="paper-meta">{meta}</p>

      <p>{children}</p>
    </article>
  );
}
