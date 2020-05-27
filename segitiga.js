  let tinggi = 550;
  let lebar = 500;
  let Ox = 30;
  let Oy = tinggi-30;

function setup() {
  let myCanvas = createCanvas(lebar, tinggi);
  myCanvas.parent('myContainer');
}

function draw() {
  background(220);
  let s=88;
  let pb=1;
  let lb=1;
   let p = Ox+s;
  let l = Oy-s;
  
  
  fill(250);
  beginShape();
    vertex(Ox, Oy);
    vertex(Ox, Oy-5*s);
    vertex(Ox+5*s, Oy-5*s);
    vertex(Ox+5*s, Oy);
  endShape(CLOSE);
  
   if (mouseX>Ox+5*s && mouseY<Oy-5*s)
      {
        p=Ox+5*s;
        l=Oy-5*s 
      } else if (mouseX < Ox+s && mouseY>Oy-s)
      {
        p = Ox+s;
        l=Oy-s;
      }
      else if(mouseY>Oy-s )
      {
        if(mouseX<Ox+5*s){
          p=mouseX;
        } else{
          p=Ox+5*s;
        }
        
        l=Oy-s;
      }else if (mouseX < Ox+s)
      { 
        if (mouseY>Oy-5*s){
          l=mouseY;
        } else{
          l=Oy-5*s;
        }
        p = Ox+s;
             
      }else {
        if(mouseY<Oy-5*s){
          p=mouseX;
          l=Oy-5*s;
        } else if (mouseX>Ox+5*s) {
          p=Ox+5*s;
          l=mouseY;
        } else{
          p=mouseX;
          l=mouseY;
        }
        
      }

  fill('#42a5f5');
      beginShape();
        vertex(Ox, Oy);
        vertex(p, Oy);
        vertex(p, l);
      endShape(CLOSE);

  fill('#f44336');
      beginShape();
        vertex(Ox, Oy);
        vertex(Ox, l);
        vertex(p, l);
      endShape(CLOSE);
  

  
  
  fill(0);

  textSize(20);
  text('A', Ox-20,Oy+20);
  text('B', p+2,Oy+20);
  text('C',p+2,l);
  text('D',Ox-20,l);
   text('a',p/2,Oy+20 );
  text('t',p+5, Oy-(Oy-l)/2);
  text('a',p/2,l-10);
  text('t',Ox-15, Oy-(Oy-l)/2);
  text('L ABC = 1/2 Luas ABCD = 1/2 x p x l = 1/2 x a x t', 30,30 );
  
  
 
   }