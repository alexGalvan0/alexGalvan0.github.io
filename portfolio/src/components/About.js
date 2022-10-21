
export default function About() {
  return (
    <div className="container col-xl-10 col-xxl-8 px-4 py-5">
      <div className="row align-items-center g-lg-5 py-5">
        <div className="col-lg-7 text-center text-lg-start">
          <h1 className="display-4 fw-bold lh-1 mb-3">About Me</h1>
          <p className="col-lg-10 fs-4">
            My name is Alex Galvan and I am a Web Developer from Lexington KY!
            I am currentyl enrolled at the Awesome Inc Web Developer Bootcamp and
            plan to finish this December. We are learning teachnologies such as Git,
            React, Django in an Agile work enviroment. Feel free to reach out to me
            to connect on how I can bring value to your company.
          </p>
        </div>
        <div className="col-md-10 mx-auto col-lg-5">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Message
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <div class="col-auto">
            <button type="submit" class="btn btn-dark mb-3">
              Message me!
            </button>
          </div>
        </div>
      </div>
      <img className ="rounded"src='./img/galvan-alex.jpeg' style={{height:'25rem'}} alt='Alex Galvan' />
    </div>
  );
}
