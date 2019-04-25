var code2image = require("code2image");
var styles = {
  // it's default styles
  fontName: "monospace",
  fontMinSize: "6px",
  fontSize: "18px",
  fontRatio: 1,
  lineHeight: "20px",
  color: "black",
  background: "white",
  keyword: "#444 bold",
  built_in: "black",
  number: "black",
  string: "green",
  comment: "gray",
  decorator: "black",
  function: "black",
  class: "black",
  title: "black",
  params: "black",
  section: "black",
  regexp: "red",
  preprocessor: "black",
  attribute: "black"
};

code2image.render(
  "var hello = 'hello';\nvar world = 'world';\nconsole.log(hello + ' ' + world);",
  "test.png",
  styles,
  function() {
    console.log("ok!");
  }
);
