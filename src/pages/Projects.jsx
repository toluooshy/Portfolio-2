import "./Projects.css";

import cryptern from "../media/summer2022crypternnft.png";
import signalGif from "../media/signalsolver.gif";
import wobbleGif from "../media/wobblefinance.gif";
import hipsterGif from "../media/hipstertrek.gif";
import dynamiGif from "../media/dynamichat.gif";
import americansflags from "../media/americansflags.png";
import mochi from "../media/mochi.png";
import pyracerGif from "../media/pyracer.gif";
import wuvu from "../media/wuvu.png";
import sfh from "../media/sfh.png";
import balloonride from "../media/balloonride.mp4";
import climatechase from "../media/climatechase.mp4";
import gth from "../media/gth.mp4";
import cdclbuddy from "../media/cdclbuddy.gif";
import pantry from "../media/pantry.mp4";
import jist from "../media/jist.mp4";

export default function Projects() {
  return (
    <main className="projects">
      <header className="projects-header">
        <h2>Current and Past Work</h2>
      </header>

      <Project
        title="Jist! (2025-present)"
        href="https://jist.cc/"
        image={jist}
      >
        Jist! is an AI-powered mobile app that helps users make healthier food
        choices by instantly identifying what they're eating and suggesting
        better alternatives. Using camera and voice input, the app recognizes
        foods without requiring packaging or barcodes and returns personalized
        recipe suggestions in seconds.
        <br />
        <br />
        The system combines multimodal machine learning—including vision, OCR,
        and multilingual speech-to-text—with a retrieval-augmented generation
        pipeline. Identified foods are enriched with structured nutrition and
        recipe data, then passed through a GPT-4.1 based language model to
        generate skill-appropriate, goal-aware recipes. Jist! also includes a
        lightweight, optional social layer for saving, sharing, and exporting
        recipes.
      </Project>

      <Project
        title="Pantry (2024-present)"
        href="https://pantryapp.xyz"
        source={"https://github.com/Princeton-HCI/pantry-app"}
        image={pantry}
      >
        Pantry is a privacy-first social feed app that gives users full control
        over how their timelines are curated across the open social web. Instead
        of algorithmic ranking or data mining, Pantry uses on-device
        personalization and teachable feed controls, allowing users to
        explicitly shape what they see based on their own values and interests.
        <br />
        <br />
        Built as a native iOS application, Pantry connects communities across
        platforms such as Mastodon, Bluesky, Threads, Pixelfed, Lemmy, and
        Misskey. User preferences are encrypted and stored locally, emphasizing
        transparency, interoperability, and user agency in social media design.
      </Project>

      <Project
        title="Sustainable Finance Hub (2024-present)"
        href="https://www.sustainablefinancehub.net"
        source={"https://github.com/sustainablefinancehub/SFH-Web"}
        image={sfh}
      >
        Sustainable Finance Hub is a web platform designed to democratize access
        to environmental and financial data in support of climate-conscious
        decision making. The project provides transparent, community-powered
        access to sustainability reports, corporate disclosures, and
        environmental impact insights that are often difficult for the public to
        obtain.
        <br />
        <br />
        Built as a user-friendly web application with a companion API,
        Sustainable Finance Hub enables researchers, activists, and everyday
        users to explore, analyze, and integrate sustainability data into their
        own workflows. The platform emphasizes accessibility, open data, and
        informed action in response to the climate crisis.
      </Project>

      <Project
        title="Public Private Partnerships: Their History and Impact on American Society (2025)"
        href="https://www.youtube.com/embed/G4Rlfzg4tY4"
        embed={
          <iframe
            width="100%"
            height="360"
            src="https://www.youtube.com/embed/G4Rlfzg4tY4"
            title="Public Private Partnerships: Their History and Impact on American Society"
            allowFullScreen
          />
        }
      >
        A research-driven video essay analyzing the role of public-private
        partnerships (PPPs) in U.S. policymaking and public infrastructure. The
        project traces the evolution of PPPs from 19th-century railroads to
        contemporary applications in healthcare, space exploration, and
        large-scale public works.
        <br />
        <br />
        Combining historical context, policy pipeline analysis, real-world case
        studies, and street-level interviews, the work evaluates how effectively
        PPPs balance innovation and efficiency against public accountability and
        trust, ultimately questioning who benefits most from these partnerships
        and how they should be structured moving forward.
      </Project>

      <Project
        title="Gaming Through History (2025)"
        href="https://github.com/toluooshy/GamingThroughHistory"
        source={"https://github.com/toluooshy/GamingThroughHistory"}
        image={gth}
      >
        Gaming Through History is a comparative game development project that
        explores how hardware constraints have shaped video game design over
        time. The project reimagines the classic game Pong across three
        technological eras, each built using the tools, languages, and
        limitations of its historical context.
        <br />
        <br />
        The project includes three playable implementations—"El Clásico 1962" on
        a PDP-1 style system, "El Clásico 1985" for the NES, and "El Clásico
        Forever" built in Unity with online multiplayer. Together, these
        versions highlight the evolution of graphics, input systems, networking,
        and development workflows across more than six decades of game
        technology.
      </Project>

      <Project
        title="Climate Chase! (2025)"
        href="https://apps.apple.com/us/app/climate-chase"
        source={"https://github.com/toluooshy/ClimateChase"}
        image={climatechase}
      >
        Climate Chase! is an educational mobile game designed to promote
        environmental awareness through playful, interactive challenges. Players
        engage in a series of sustainability-focused mini-games that aim to
        entertain while encouraging real-world reflection and action around
        climate-conscious behaviors.
        <br />
        <br />
        Developed during Princeton Wintersession 2025, the game features nine
        distinct challenges and incorporates novel mobile mechanics such as
        device shaking, tilting, and microphone input to create an immersive
        experience. Built by a collaborative team, Climate Chase! blends game
        design with environmental education to support learning through play.
      </Project>

      <Project
        title="CDCL Buddy (2024)"
        href="https://www.cdclbuddy.com/"
        source={"https://github.com/toluooshy/cdcl-buddy"}
        image={cdclbuddy}
      >
        CDCL Buddy is an interactive educational tool designed to make
        Conflict-Driven Clause Learning (CDCL) SAT solvers more accessible
        through hands-on exploration. The app allows students and educators to
        experiment with variable assignments, visualize implication graphs, and
        observe real-time solver behavior to better understand modern
        SAT-solving techniques.
        <br />
        <br />
        Built with React and a custom JavaScript CDCL solver, the project
        features dynamic graph visualizations, drag-and-drop interaction, and
        guided tutorials covering conflict resolution, clause learning, and
        non-chronological backtracking. CDCL Buddy is available as a web
        application and as a cross-platform mobile app for iOS and Android.
      </Project>

      <Project
        title="Wuvu (2024)"
        href="https://apps.apple.com/us/app/wuvu/id6499083539"
        source={"https://www.wuvu.app"}
        image={wuvu}
      >
        Wuvu is an AI-powered personal styling app designed to help users dress
        with confidence using the clothes they already own. By learning
        individual style preferences, color palettes, and silhouettes, Wuvu
        generates personalized outfit recommendations tailored to daily
        activities, special occasions, and local weather.
        <br />
        <br />
        Developed as a native iOS application and prepared for App Store
        distribution, Wuvu combines wardrobe photo uploads with adaptive
        recommendation logic that improves over time based on user feedback. The
        project focuses on personalization, usability, and making everyday
        fashion decisions effortless through intelligent design.
      </Project>

      <Project
        title="Balloon Ride! (2023)"
        href="https://apps.apple.com/us/app/balloon-ride/id6466751401"
        source={"https://github.com/toluooshy/BalloonRide"}
        image={balloonride}
      >
        Balloon Ride! is a retro-inspired 8-bit arcade game developed for iOS
        and Android, challenging players to survive a skyward journey while
        navigating hazards and collecting power-ups. Gameplay centers on
        resource management, reflexes, and strategic item use, including health
        recovery, invincibility, and environment-altering pickups.
        <br />
        <br />
        Built with Unity as a cross-platform mobile game, the project was
        designed, tested, and prepared for distribution on both the App Store
        and Google Play, with an emphasis on tight controls, nostalgic
        aesthetics, and fast-paced arcade-style play.
      </Project>

      <Project
        title="AI: Plague or Panacea? (2023)"
        href="https://www.youtube.com/embed/jz1_aH07J0s"
        embed={
          <iframe
            width="100%"
            height="360"
            src="https://www.youtube.com/embed/jz1_aH07J0s"
            title="AI: Plague or Panacea?"
            allowFullScreen
          />
        }
      >
        An analytical video essay examining artificial intelligence as both a
        technological promise and a social risk. The project traces AI's
        intellectual history from ancient automatons to modern machine learning,
        while situating contemporary debates within political, cultural, and
        economic contexts.
        <br />
        <br />
        Through historical analysis, pop culture critique, interviews, and
        primary research, the work explores why attitudes toward AI diverge
        across personal conviction rather than partisan alignment, ultimately
        questioning whether artificial intelligence functions as a societal
        plague, a panacea, or an unresolved mixture of both.
      </Project>

      <Project
        title="Americans' Flags NFT (2021-2023)"
        href="https://americans-flags-nft.herokuapp.com/"
        source={"https://github.com/toluooshy/Americans-Flags-NFT"}
        image={americansflags}
      >
        Americans Flags NFT is a decentralized reinterpretation of the original
        Americans Flags project by Tim Ferguson Sauder, developed through his
        lab Return Design at Olin College. The project adapts a physical,
        interactive art experience into a digital platform where users can
        create and mint their own U.S. flag NFTs to express what “America” means
        to them.
        <br />
        <br />
        Built using web scraping algorithms and blockchain smart contracts, the
        dApp allows free (plus gas) minting on Polygon and is compatible with
        Polygon-supported platforms. Future plans include expanding beyond the
        United States by creating adaptable templates for global audiences to
        reinterpret their own national flags.
      </Project>

      <Project
        title="Summer 2022 Crytern NFT (2022)"
        href="https://opensea.io/collection/summer-2022-cryptern-nft"
        image={cryptern}
      >
        This project commemorates the Summer 2022 Coinbase Cryptern cohort,
        spanning participants across the globe. As part of the Cryptern Social
        Committee, we created a decentralized artifact celebrating the work and
        growth of the cohort.
        <br />
        <br />
        The NFT collection was implemented as a full-stack decentralized
        application using React, Web3.js, and Solidity, and hosted internally.
      </Project>

      <Project
        title="Wellesley College Future Of Work Research (2020-2022)"
        href="https://www1.wellesley.edu/news/2020/stories/node/183466"
        source={"https://my.visme.co/view/ojnegdm9-2021-chatbot-poster"}
        image={mochi}
      >
        Future of Work Chatbot is a research-driven conversational system
        designed to study well-being, productivity, and time usage among remote
        information workers during the COVID-19 pandemic. The project uses
        conversational surveys to collect higher-quality self-reported data than
        traditional survey methods, while also supporting user reflection and
        goal-setting.
        <br />
        <br />
        Built around a time-diary study framework, the chatbot—Mochi—was
        developed using Google Dialogflow and Firebase and deployed via Google
        Assistant. Collected data is paired with a visualization website that
        allows users to reflect on trends in productivity, well-being, and goal
        accomplishment over time. The system was iteratively refined through
        pilot studies to improve tone, professionalism, and user support.
      </Project>

      <Project
        title="Signal Solver (2021)"
        href="https://sites.google.com/view/signalsolver/home"
        source={"https://github.com/toluooshy/Signal-Solver"}
        image={signalGif}
      >
        Signal Solver is an educational minigame that translates core signal
        processing concepts — such as sinusoidal composition and domain shifting
        — into an interactive, challenge-based experience.
        <br />
        <br />
        Built with HTML and vanilla JavaScript, the project emphasizes intuitive
        learning through experimentation rather than rote instruction.
      </Project>

      <Project
        title="The Cup Noodle Machine (2021)"
        href="https://olincollege.github.io/pie-2021-03/Cup-Noodle/"
        embed={
          <iframe
            width="100%"
            height="360"
            src="https://www.youtube.com/embed/6TkAAt8hxeA"
            title="Cup Noodle Machine"
            allowFullScreen
          />
        }
      >
        A fully automated ramen vending machine designed to make a simple
        experience delightful. The system features a two-axis gantry, hot water
        kettle, modular ramen dispensers, and transparent housing to showcase
        mechanical motion.
        <br />
        <br />
        The accompanying web interface was built with React and FastAPI, while
        hardware control was implemented using Arduino/C++ firmware.
      </Project>

      <Project
        title="Wobble Finance (2021)"
        href="http://www.wobblefinance.com/"
        source={"https://github.com/toluooshy/WobbleFinance"}
        image={wobbleGif}
      >
        Wobble Finance is a minimalist cryptocurrency screener designed to help
        newcomers understand market fundamentals. Users can quickly view price,
        volume, and daily changes for hundreds of assets.
        <br />
        <br />
        The platform also supported an educational token (WBBL) deployed on
        Binance Smart Chain. Built with Node.js, EJS, and Solidity.
      </Project>

      <Project
        title="HipsterTrek (2021)"
        href="https://hipstertrek.herokuapp.com/"
        source={"https://github.com/toluooshy/HipsterTrek"}
        image={hipsterGif}
      >
        HipsterTrek explores the relationships between musical genres by
        modeling them as a graph and computing the shortest path between styles.
        <br />
        <br />
        Developed as an implementation-focused exploration of algorithms and
        data structures using Node.js and vanilla JavaScript.
      </Project>

      <Project
        title="DynamiChat (2021)"
        href="https://toluooshy.github.io/SoftSysDynamiChat/"
        source={"https://github.com/toluooshy/SoftSysDynamiChat"}
        image={dynamiGif}
      >
        DynamiChat is a terminal-based messaging platform designed to minimize
        interface overhead while preserving real-time communication.
        <br />
        <br />
        Implemented in C using MongoDB Atlas and BSON for data storage and
        retrieval.
      </Project>

      <Project
        title="PyRacer (2020)"
        href="https://sd2020spring.github.io/PyRacer-The-Game/"
        source={"https://github.com/sd2020spring/PyRacer-The-Game"}
        image={pyracerGif}
      >
        A Python racing game inspired by SEGA's OutRun. Features multiple cars
        and courses, developed as a final project for Software Design.
        <br />
        <br />
        Built with Python and Pygame.
      </Project>

      <footer className="projects-footer">
        <a href="https://github.com/toluooshy" target="_blank" rel="noreferrer">
          For more projects, see my GitHub →
        </a>
      </footer>
    </main>
  );
}
function Project({ title, href, source, image, embed, children }) {
  const isVideo =
    typeof image === "string" &&
    (image.endsWith(".mp4") || image.endsWith(".webm"));

  return (
    <article className="project">
      <h3>
        <a href={href} target="_blank" rel="noreferrer">
          {title}
        </a>
      </h3>

      <small>
        {!!source ? (
          <a href={source} target="_blank" rel="noreferrer">
            {source}
          </a>
        ) : null}
      </small>

      <p>{children}</p>

      {image && isVideo && (
        <video
          src={image}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          style={{ width: "100%", height: "500px" }}
        />
      )}

      {image && !isVideo && <img src={image} alt="" />}

      {embed}
    </article>
  );
}
