import React from "react";

import { ArrowDown } from "./arrow-down";

enum IconsType {
  "ARROW_DOWN",
}

export const Icons = (name: keyof typeof IconsType) => {
  switch (name) {
    case "ARROW_DOWN":
      return <ArrowDown />;
  }
};
