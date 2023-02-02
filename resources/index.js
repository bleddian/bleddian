const redditApp = document.getElementsByClassName("reddit_app")[0];
const redditAppFigure = document.getElementsByClassName("reddit_app_figure")[0];

redditAppFigure.style.display = "none";

const displayRedditAppFigure = () => {
    if (redditAppFigure.style.display === "none") {
        redditAppFigure.style.display = "block";
    } else {
        redditAppFigure.style.display = "none";
    }
}

redditApp.addEventListener("click", displayRedditAppFigure);

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