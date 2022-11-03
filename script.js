let container=document.querySelector('.container');
function makeGrid(gridSize){
    for(let r=0;r<gridSize;r++){
        let row=document.createElement('div');
        container.appendChild(row);
        row.classList.add('gridRow');
    }
    const breadth=640/gridSize;
    let rows=document.querySelectorAll('.gridRow');
    for(let i=0;i<rows.length;i++){
        for(let j=0;j<gridSize;j++){
            let cell=document.createElement('div');
            rows[i].appendChild(cell);
            cell.classList.add('cell');
            cell.setAttribute('style',`width:${breadth}px;height:${breadth}px`);
        }
    }
    let elements=document.getElementsByClassName('hover');
    let cells=document.querySelectorAll('.cell');
    cells.forEach(cell=>{
        cell.addEventListener('mouseover',()=>{
            const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
            const r = randomBetween(0, 255);
            const g = randomBetween(0, 255);
            const b = randomBetween(0, 255);
            const rgb = `rgb(${r},${g},${b})`;
            cell.style.backgroundColor=rgb;
            cell.classList.add('hover');
        });
    });
}
makeGrid(16);
const btn1=document.querySelector('.button1');
btn1.addEventListener('click',()=>{
    let gridSize=parseInt(prompt('Enter new Grid Size'));
    let rows=document.querySelectorAll('.gridRow');
    rows.forEach(row=>{
        container.removeChild(row);
    });
    makeGrid(gridSize);
});
const btn2=document.querySelector('.button2');
btn2.addEventListener('click',()=>{
    let cells=document.querySelectorAll('.cell');
    cells.forEach(cell=>{
        cell.style.backgroundColor='transparent';
    });
});