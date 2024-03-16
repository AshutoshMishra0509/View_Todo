function Del({ handleClear }) {
  return (
    <div className="clear">
      <button className="btn btn-warning bt-4" onClick={handleClear}>
        Clear All task
      </button>
    </div>
  );
}
export default Del;
