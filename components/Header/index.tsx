import React, { useState } from "react";
import "./index.module.scss";

export const Header = () => {
  const [sidebar, toggle] = useState(false);

  return (
    <div className="wrapper">
      <p>Hello!</p>
    </div>
  );
};
