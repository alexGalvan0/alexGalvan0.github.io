export default function About() {
  return (
    <div className="container col-xl-10 col-xxl-8 px-4 py-5">
      <div className="row align-items-center justify-content-center g-lg-5 py-5">
        <div className="col-lg-7 text-center text-lg-start rounded">
          <h1 className="display-4 fw-bold lh-1 mb-3">About Me</h1>
          <p className="col-lg-10 fs-4">
            My name is Alex Galvan and I am a Web Developer from Lexington KY! I
            am currently enrolled at the Awesome Inc Web Developer Bootcamp and
            plan to finish December 2022. We are learning technologies such as
            Git, React, Django in an Agile work enviroment. Feel free to reach
            out to me and connect on how I can bring value to your company.
          </p>
        </div>

        <img
          className="rounded "
          src="./img/galvan-alex.jpeg"
          style={{ height: "22rem", width:'19rem' }}
          alt="Alex Galvan"
        />
      </div>
    </div>
  );
}
