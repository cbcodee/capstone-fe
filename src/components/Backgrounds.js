import React, { useState } from "react";

const Background = () => {
  const [backgroundImage, setBackground] = useState(0);

  const updateBackground = () => {
    setBackground(backgroundImage);
  };
  return (
    <section>
      <button onClick={updateBackground}>add task</button>
    </section>
  );
};

export default Background;
