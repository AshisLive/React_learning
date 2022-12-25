const heading1 = React.createElement(
  "h1",
  { id: "title1" },
  "Showing heading 1"
); //child 1
const heading2 = React.createElement(
  "h2",
  { id: "title2" },
  "Showing heading 2"
); //child 2
//child 1 and child 2 will be wrapped inside the container
const container = React.createElement(
  "div",
  { id: "containerBodyThatHasBothHeading1AndHeading2" },
  [heading1, heading2]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
