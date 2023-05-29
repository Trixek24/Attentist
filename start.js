
function next()
{
    window.location.href = "main.html";
}
function add()
{
       const input = document.createElement("input");
       document.getElementById("output").appendChild(input);
       const button = document.createElement("input");
       button.setAttribute("type","checkbox");
       button.className +="checkbox";
       document.getElementById("output").appendChild(button).innerHTML = "Present";
       const br_tag = document.createElement("br");
       document.getElementById("output").appendChild(br_tag);

    return;
}
function sub()
{
    document.getElementById("output").removeChild(document.getElementById("output").lastChild);
    document.getElementById("output").removeChild(document.getElementById("output").lastChild);
    document.getElementById("output").removeChild(document.getElementById("output").lastChild);
}
