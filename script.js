const container = document.querySelector('#container');
let squares = 8;
let num = 1;
for(let i = 0; i < (squares ** 2); i++){
    const i = document.createElement('div');
    container.appendChild(i);
    /* i.textContent = num; */
    i.classList.add('cell');
    num++;
}

let htmlStyles = window.getComputedStyle(document.querySelector("html"));
let colNum = parseInt(htmlStyles.getPropertyValue("--rowNum"));
let rowNum = parseInt(htmlStyles.getPropertyValue("--rowNum"));

document.documentElement.style.setProperty("--colNum", squares);
document.documentElement.style.setProperty("--rowNum", squares);

const paintDiv = document.querySelectorAll('.cell');
console.log(paintDiv);

paintDiv.forEach((div) => {
    div.addEventListener('mouseover', () => {
        div.classList.add('clicked');
    });
});

/* container.style.gridTemplateColumns = repeat('+ squares +', 50px);
container.style.gridTemplateRows = '50px 50px 50px 50px'; */