function count()
{
        let word = document.getElementById("str").value;
        let count = word.length;
        let output = document.getElementById("output");

        output.innerHTML = `<h2>${count}</h2>`

}