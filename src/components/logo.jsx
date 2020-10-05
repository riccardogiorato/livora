import React from "react";
import { styled } from "baseui";
import { Display1 } from "baseui/typography";

const Centered = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "30px",
});

function Logo() {
  return (
    <div className="">
      <Centered>
        <Display1>
          <span className="azonix">LIVORA</span>
        </Display1>
      </Centered>
    </div>
  );
}

export default Logo;
