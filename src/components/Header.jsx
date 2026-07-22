import React, { useState } from "react";

function Header() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme");
  });

  // const handleDarkMode = () => {
  //   setIsDark((d) => !d);
  //   console.log(isDark);
  // };

  const handleDarkMode = () => {
    setIsDark((d) => !d);
    if (isDark) {
      localStorage.setItem("theme", "#000");
    } else {
      localStorage.setItem("theme", "#FFF");
    }
  };
  console.log(isDark);

  return (
    <>
      <label htmlFor="theme">theme</label>
      <input type="checkbox" id="theme" onChange={handleDarkMode} />

      {/* <div className={`h-30 ${isDark ? `bg-amber-200` : `bg-gray-800`}`}></div> */}
    </>
  );
}

export default Header;
