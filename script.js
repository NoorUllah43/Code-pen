let htmlCode = document.querySelector("#html-code");
let cssCode = document.querySelector("#css-code");
let jsCode = document.querySelector("#js-code");
let output = document.querySelector("#output");
let textArea = document.querySelector("textarea");


function run() {
      output.contentDocument.body.innerHTML = htmlCode.value + "<style>" + cssCode.value + "</style>";
      output.contentWindow.eval(jsCode.value);
      
}


// var editor = CodeMirror.fromTextArea(htmlCode, {
//       lineNumbers: true,
//       theme: "ayu-dark",
//     });
// var editor = CodeMirror.fromTextArea(cssCode, {
//       lineNumbers: true,
//       theme: "ayu-dark",
//     });
// var editor = CodeMirror.fromTextArea(jsCode, {
//       lineNumbers: true,
//       theme: "ayu-dark",
//     });



 



