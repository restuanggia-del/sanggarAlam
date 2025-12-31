"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

interface NavbarWrapperProps {
  children: React.ReactNode;
}

const NavbarWrapper: React.FC<NavbarWrapperProps> = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={clsx(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur shadow-md"
          : "bg-white/80 backdrop-blur"
      )}
    >
      {children}
    </div>
  );
};

export default NavbarWrapper;
