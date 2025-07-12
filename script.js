const c=document.getElementById('lienzo');
const ctx=c.getContext('2d');
let x=50,y=50,size=40,puntos=0;

function dibujar(){
  ctx.clearRect(0,0,400,400);
  ctx.fillStyle='crimson';
  ctx.fillRect(x,y,size,size);
}

c.addEventListener('click',e=>{
  const r=c.getBoundingClientRect();
  const cx=e.clientX-r.left, cy=e.clientY-r.top;
  if(cx>x && cx<x+size && cy>y && cy<y+size){
    document.getElementById('puntos').textContent=++puntos;
    x=Math.random()*(400-size);
    y=Math.random()*(400-size);
    dibujar();
  }
});

dibujar();
