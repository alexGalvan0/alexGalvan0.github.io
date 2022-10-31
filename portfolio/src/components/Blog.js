function Blog({ id, week, date, answer, control}) {
  return (
    <div className="accordion accordion-flush" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id={id}>
          <button
            className={`accordion-button ${control}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#${control}`}
            aria-expanded="true"
            aria-controls={control}
          >
            {week}
          </button>
        </h2>
        <div
          id={control}
          className="accordion-collapse collapse"
          aria-labelledby={id}
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <strong>{date}</strong>
            <br /> {answer}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Blog;
