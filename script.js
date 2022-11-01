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
    let cells=document.querySelectorAll('.cell');
    cells.forEach(cell=>{
        cell.addEventListener('mouseover',()=>{
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
        cell.classList.remove('hover');
    });
});