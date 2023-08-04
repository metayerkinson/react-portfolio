// Import my picture
import headshot from "../../images/devImg.png";

// Builds the component to show my headshot and a short bio.
export default function Home() {
  return (
    <>
      <aside>
        <img src={headshot} alt="metayer Kinson" />
      </aside>
      <div className="sections">
        <section id="About">
          <h2>About Me</h2>

          <p
            className="aboutMe text"
            style={{
              paddingTop: "35px",
              fontSize: "20px",
            }}
          >
            Hi there, I'm Kinson Metayer, and I am a Software Developer.
            <br />
            You are welcome to look around.
            <br />
            Email me at{" "}
            <a href="kinsonmetayer@gmail.com" style={{ fontStyle: "italics" }}>
              kinsonmetayer@gmail.com
            </a>
            <br />
          </p>
          <span>
            <a href="https://www.github.com/metayerkinson">GitHub {"   "} </a>
          </span>
        </section>
        <br />
        <section>
          <div style={{ backgroundColor: "#F2FCFA" }}>
            <h3>My Background</h3>
            <p className="myBackgroundText">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
