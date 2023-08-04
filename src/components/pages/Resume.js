// Component to show two lists of proficiencies and to allow the user to download my resume.
// The resume is referenced as a static asset under the public folder.
export default function Resume() {
  return (
    <div className="sections">
      <section id="Contact" style={{ textAlign: "left" }}>
        <h2>Resume</h2>
        <button style={{ backgroundColor: "blue", color: "white" }}>
          <p style={{ textAlign: "left" }}>
            Download my{" "}
            <a href="/downloads/" alt="Resume" download>
              resume
            </a>
          </p>
        </button>
        <h3>Front-End Proficiencies:</h3>
        <ul>
          <li>HTML, CSS, JavaScript</li>
          <li>React</li>

          <li>Bootstrap, SASS</li>
          <li>RESTful APIs</li>
        </ul>
        <h3>Back-End Proficiencies:</h3>
        <ul>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MS SQL, MySQL, MongoDB</li>
          <li>Sequelize, Mongoose</li>
        </ul>
      </section>
    </div>
  );
}
