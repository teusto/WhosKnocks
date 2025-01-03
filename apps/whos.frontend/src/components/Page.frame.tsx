import React, { ReactNode } from "react";
import "./pageFrame.scss";
import SideBar from "./Sidebar";

interface PageFrameProps {
  children: ReactNode;
  className?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "full";
  padding?: boolean;
}

const PageFrame: React.FC<PageFrameProps> = ({
  children,
  className = "",
  maxWidth = "lg",
  padding = false,
}) => {
  return (
    <div className={`page-frame`}>
      <SideBar />
      <main
        className={`page-frame__main ${maxWidth} ${
          padding ? "with-padding" : ""
        } ${className}`}
      >
        {children}
      </main>
    </div>
  );
};

export default PageFrame;
