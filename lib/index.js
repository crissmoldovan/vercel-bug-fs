import fs from "fs";

export const getData = () => {
  if (false) {
    const content = fs.readFileSync("/some path");
  }

  return {
    test: true,
  };
};
