function ContactCard() {
  return (
    <div className="card mb-5 bg-light text-center" id='contact-card' style={{width:'20rem'}}>
       <img src="./img/galvan-alex.jpeg" className="card-img-top pt-2" alt="..."/> 
      <div className="card-body d-flex justify-content-center flex-column gap-1">
        <h5 className="card-title">Alex Galvan</h5>
        <p className="card-text">
          Fullstack Developer
        </p>
        <a href="#" className="btn btn-dark">
          Go somewhere
        </a>
        <a href="#" className="btn btn-dark">
          Go somewhere
        </a>
        <a href="#" className="btn btn-dark">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default ContactCard