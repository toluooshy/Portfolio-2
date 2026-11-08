import "./Papers.css";

export default function Papers() {
  return (
    <main className="papers">
      <header className="papers-header">
        <h2>Research, Writing, and Long-Form Work</h2>
      </header>

      <Paper
        title="Seeing the Politics of Decentralized Social Media Protocols"
        href="https://dl.acm.org/doi/10.1145/3816995"
        meta="CSCW · 2026"
        coauthors="Oshinowo, Hwang, Zhang, Monroy-Hernández."
      >
        This paper analyzes ActivityPub, AT Protocol, Nostr, and Farcaster as
        socio-technical systems that encode political values. It develops a
        conceptual framework for understanding power, governance, and control
        in decentralized infrastructures.
        <br />
        <br />
        The work provides further insight into the politics embedded in
        different approaches to decentralization.
      </Paper>

      <Paper
        title="Pantry: Reconceptualizing Social Media Feed Curation and Its Implications for User Agency"
        href="https://www.proquest.com/openview/27153640c9a147108271fc5e6e6efe6d/"
        meta="Masters Thesis · 2026"
        coauthors="Oshinowo, Monroy-Hernández."
      >
        This systems and HCI research paper proposes user-authored social media
        feeds as an alternative to engagement-optimized ranking. It introduces
        Pantry, a mobile app that enables users to express feed preferences
        explicitly and in the moment.
        <br />
        <br />
        The study evaluates the approach through surveys, activity logs, and
        debrief interviews, finding strong user interest in agency-centered
        feed control.
      </Paper>

      <Paper
        title="CDCL Buddy: Demystifying SAT Solvers for Education"
        href="https://drive.google.com/file/d/1W7wIauSCGrhFQCeuBNbpbti1ROxuCnpc"
        meta="Princeton University · 2024"
        coauthors="Oshinowo."
      >
        This paper introduces CDCL Buddy, an interactive visualization tool
        that makes Conflict-Driven Clause Learning (CDCL) SAT solvers more
        accessible for education.
        <br />
        <br />
        It bridges theory and practice through real-time exploration of
        conflict analysis and clause learning, and includes an informal
        usability study with learners who have varying familiarity with SAT
        solvers.
      </Paper>

      <Paper
        title='Fostering Social Connectivity by Digitizing the "Third Place"'
        href="https://drive.google.com/file/d/15pdyuEcbdyx0UHigSZ8FHkPdVtnsfHAO"
        meta="Princeton University · 2023"
        coauthors="Oshinowo."
      >
        This paper explores how virtual platforms can recreate the social
        functions of physical third places. It introduces Avable, a group-based
        video platform that uses multidimensional user matching.
        <br />
        <br />
        The work emphasizes privacy-aware design, adaptability, and meaningful
        social connection.
      </Paper>

      <Paper
        title="How Do College Students Use ChatGPT to Learn to Code"
        href="https://drive.google.com/file/d/1jcoudDb6IsXPTy8mIIti0VDfcI2MLr8I"
        meta="Princeton University · 2023"
        coauthors="Zhang, Alicki, Zheng, Oshinowo."
      >
        This study examines how 108 students across 12 institutions use ChatGPT
        to learn programming. It finds that beginners rely heavily on AI
        assistance, while experienced programmers critically evaluate its
        outputs.
        <br />
        <br />
        The findings offer guidance for responsibly integrating AI tools into
        computer science curricula.
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
