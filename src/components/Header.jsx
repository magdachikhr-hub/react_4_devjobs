import React, { useEffect, useState } from "react";

function Header() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
    document.body.classList.toggle("dark", isDark);
  }, [isDark]);

  const handleIsDark = () => {
    setIsDark((th) => !th);
  };
  console.log(isDark);

  return (
    <>
      <label htmlFor="theme">theme</label>
      <input
        type="checkbox"
        id="theme"
        onChange={handleIsDark}
        checked={isDark}
      />

      {/* <div className="h-6 dark:bg-black"></div> */}
      {/* <div className={`h-30 ${isDark ? `bg-amber-200` : `bg-gray-800`}`}></div> */}
    </>
  );
}

export default Header;
