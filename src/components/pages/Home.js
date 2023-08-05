// Import my picture
import headshot from "../../images/kinsonmetayer.jpg";

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
            Greetings! My name is Kinson Metayer, and I have had an exciting journey in the insurance industry. Since 2017, I have been actively engaged as both a Claims Adjuster and an Insurance Agent, where I have honed my skills in assessing claims, providing exceptional customer service, and ensuring clients' peace of mind in uncertain times.

While I thoroughly enjoy my work in insurance, I have also discovered a deep passion for the world of coding. In my spare time, I have embarked on a journey of self-learning, immersing myself in the realms of HTML, CSS, and JavaScript. Coding challenges have become my playground, and every small victory in solving them brings me immense satisfaction and fuels my determination to grow further in this field.

Combining my expertise in insurance with my newfound enthusiasm for coding, I am determined to explore innovative ways to streamline processes and enhance user experiences within the insurance industry.</p>  <p> I believe that technology and programming have the potential to revolutionize how we approach insurance, making it more accessible, efficient, and tailored to each individual's needs.

As I continue to learn and grow as a developer, I eagerly anticipate the opportunity to bridge the gap between the insurance and tech worlds, bringing forth creative solutions and creating a positive impact for both industries. With an unwavering dedication to learning and a passion for tackling challenges, I am excited about the possibilities that lie ahead in my journey as an aspiring developer and insurance professional.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
