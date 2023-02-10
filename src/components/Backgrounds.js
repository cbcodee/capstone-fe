const Background = (props) => {
  return (
    <section>
      <button
        className="coffee"
        onClick={() => props.updateBackground("coffee")}
      >
        coffee shop
      </button>
      <button
        className="library"
        onClick={() => props.updateBackground("library")}
      >
        library
      </button>
      <button
        className="nature"
        onClick={() => props.updateBackground("nature")}
      >
        nature
      </button>
      <button className="none" onClick={() => props.updateBackground("none")}>
        none
      </button>
    </section>
  );
};

export default Background;
