function Task({ Atc, pendingg, complt }) {
  return (
    <div className="tbt">
      <section>
        <button type="button" class="btn btn-primary">
          All Task: {Atc}
        </button>
        <button type="button" class="btn btn-danger">
          Pending: {pendingg}
        </button>
        <button type="button" class="btn btn-success">
          Completed:{complt}
        </button>
      </section>
    </div>
  );
}
export default Task;
