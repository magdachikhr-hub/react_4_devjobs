import React, { useEffect, useState } from "react";
import FilterJobs from "./FilterJobs";

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
      <header className="bg-[#6771E3] h-34">
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            onChange={handleIsDark}
            checked={isDark}
          />
          <div className="checkbox-bg relative w-9 h-5  peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-soft dark:peer-focus:ring-brand-soft rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-0.5 after:inset-s-0.5 after:bg-[#5964E0] after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand"></div>
          <span className="select-none ms-3 text-sm font-medium text-heading"></span>
        </label>
      </header>
    </>
  );
}

export default Header;
