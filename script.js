const container=document.querySelector('.container');
for(let r=0;r<16;r++){
    let row=document.createElement('div');
    container.appendChild(row);
    row.classList.add('gridRow');
}
let rows=document.querySelectorAll('.gridRow');
for(let i=0;i<rows.length;i++){
    for(let j=0;j<16;j++){
        let newCell=document.createElement('div');
        rows[j].appendChild(newCell);
        newCell.classList.add('cell');
    }
}