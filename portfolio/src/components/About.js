export default function About() {
  return (
    <div id="about" className="container col-xl-10 col-xxl-8 px-4 py-5">
      <div className="row align-items-center justify-content-center g-lg-5 py-5">
        <div className="col-lg-7 text-center text-lg-start rounded">
          <h1 className="display-4 fw-bold lh-1 mb-3">About Me</h1>
          <p className="col-lg-10 fs-4">
            My name is Alex Galvan and I have been developing automations, tools
            and applications for over 3 years. I also graduated the Awesome Inc
            Web Developer Bootcamp where I increased my skillset even more.
            I enjoy making things easy for people, learning and coming up with
            long lasting solutions. Please reach out to me on to connect on how I
            can contribute to your team!
          </p>
          <a
            href="#contact-card"
            className="btn btn-lg btn-secondary fw-bold border-white bg-dark"
          >
            Contact Me
          </a>
        </div>

        <img
          className="rounded "
          src="./img/galvan-alex.jpeg"
          style={{ height: "22rem", width: "19rem" }}
          alt="Alex Galvan"
        />
      </div>
    </div>
  );
}
