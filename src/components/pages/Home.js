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
              My name is Kinson Metayer, I have been in the insurance industry
              as a Claims Adjuster and an Insurance Agent since 2017. I am
              currently learning Html, CSS, and Javascript.I find Coding
              challenge but every little win is satisfying to me...
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
