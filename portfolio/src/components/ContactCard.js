function ContactCard() {
  return (
    <div className="card mb-5 bg-light text-center" id='contact-card' style={{width:'20rem'}}>
       <img src="./img/galvan-alex.jpeg" className="card-img-top pt-2" alt="..."/> 
      <div className="card-body d-flex justify-content-center flex-column gap-1">
        <h5 className="card-title">Alex Galvan</h5>
        <p className="card-text">
          Fullstack Developer
        </p>
        <div className="d-flex flex-row justify-content-around ">
        <a href="https://github.com/alexGalvan0" target='_blank'><img src="./img/Github.svg" alt="git" style={{height:'3rem'}} /></a>
        <a href="mailto:galvan.alex121@gmail.com"><img src="./img/Email.svg" alt="email" style={{height:'3rem'}} /></a>
        <a href="https://www.linkedin.com/in/alex-galvan0/" target='_blank'><img src="./img/linkedin.png" alt="git" style={{height:'3rem'}} /></a>
        </div>
        
        
      </div>
    </div>
  );
}

export default ContactCard