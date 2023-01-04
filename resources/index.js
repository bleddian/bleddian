const javascriptSyntax = document.getElementsByClassName("javascript_syntax")[0];
const javascriptSyntaxFigure = document.getElementsByClassName("javascript_syntax_figure")[0];

javascriptSyntaxFigure.style.display = "none";

const displayJavascriptSyntaxFigure = () => {
    if (javascriptSyntaxFigure.style.display === "none") {
        javascriptSyntaxFigure.style.display = "block";
    } else {
        javascriptSyntaxFigure.style.display = "none";
    }
}

javascriptSyntax.addEventListener("click", displayJavascriptSyntaxFigure);