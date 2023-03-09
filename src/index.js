import Example from "./scripts/example";

document.addEventListener("DOMContentLoaded", () => {
    // console.log("Hello World")
    // create an html element we can grab on
    const main = document.getElementById("main");
    // create new instance of d3 element in here
    // dont add a lot of code to this file
    new Example(main)
});