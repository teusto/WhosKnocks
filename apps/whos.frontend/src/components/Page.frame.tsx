import React, { ReactNode } from "react";
import "./pageFrame.scss";

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
  padding = true,
}) => {
  return (
    <div className={`page-frame ${className}`}>
      <main
        className={`page-frame__main ${maxWidth} ${
          padding ? "with-padding" : ""
        }`}
      >
        {children}
      </main>
    </div>
  );
};

export default PageFrame;
