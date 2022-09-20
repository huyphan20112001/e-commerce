import "./Mode.scss";
import React, { useState } from "react";

function Mode({ children }) {
  const context = React.createContext();
  const [checked, setChecked] = useState(false);
  const handleToggle = () => {
    !checked ? setChecked(true) : setChecked(false);
  };

  return (
    <>
      <div className={`mode ${checked ? "dark" : "light"}`}>
        <input id="switch" type="checkbox" />
        <label htmlFor="switch" onClick={handleToggle}>
          <div className="ball"></div>
        </label>
        {children}
      </div>
    </>
  );
}

export default Mode;
