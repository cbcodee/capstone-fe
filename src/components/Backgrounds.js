import React, { useState } from "react";

const Background = (props) => {
  return (
    <section>
      <button
        className="coffee"
        onClick={() => props.updateBackground("coffee")}
      >
        coffee
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

// create image buttons-> hard code

export default Background;
