import fs from "fs";

export const getData = () => {
  console.log("date", Date.now() > Date.now());
  if (Date.now() > Date.now()) {
    const content = fs.readFileSync("/some path");
    console.log("content", content); // just making sure this will not be discarded
  }

  return {
    test: true,
  };
};
