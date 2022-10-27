function Blog({ id, date, question, answer }) {
  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id={id}>
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            {date}
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <strong> {question}</strong>
            <br /> {answer}
          </div>
          <div className="accordion-body">
            <strong>{question}</strong>
            <br /> {answer}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Blog;
