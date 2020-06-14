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
    // Jika melewati batas garis tepi
      {
        d1=Ox+5*s;
        d2=Oy-5*s 
      }
      else if (mouseX < Ox+s && mouseY>Oy-s)
      {
        d1=Ox+s;
        d2=Oy-s;
      }
      else if(mouseY>Oy-s )
      {
        if(mouseX<Ox+5*s){
          d1=mouseX;
        } else{
          d1=Ox+5*s;
        }
        
        d2=Oy-s;
      }else if (mouseX < Ox+s)
      { 
        if (mouseY>Oy-5*s){
          d2=mouseY;
        } else{
          d2=Oy-5*s;
        }
        d1= Ox+s;
             
      }else {
        if(mouseY<Oy-5*s){
          d1=mouseX;
          d2=Oy-5*s;
        } else if (mouseX>Ox+5*s) {
          d1=Ox+5*s;
          d2=mouseY;
        } else{
          d1=mouseX;
          d2=mouseY;
        }
        
      }

  fill('#42a5f5');
      beginShape();
      // Titik A
        // vertex(((d1-Ox)*3/4)+Ox, Oy);
        vertex(Ox,Oy);
      // Titik B
        // vertex(d1,((Oy-d2)/2)+d2);
        vertex(((d1-Ox)*3/4)+Ox, Oy);
      // Titik C
        // vertex(((d1-Ox)*3/4)+Ox, d2);
        vertex(d1,d2);
      // Titik D
        // vertex(Ox, ((Oy-d2)/2)+d2);
        vertex(((d1-Ox)*1/4)+Ox, d2);
      endShape(CLOSE);

  fill('#f44336');
      // Bidang ADF
      beginShape();
        vertex(Ox,Oy);
        vertex(((d1-Ox)*1/4)+Ox, d2);
        vertex(Ox, d2);
      endShape(CLOSE);
  
  

  
  
  fill(0);

  textSize(20);
  
  // Garis tinggi
  line(((d1-Ox)*3/4)+Ox, Oy,((d1-Ox)*3/4)+Ox, d2);
  // Titik
  text('A', Ox-20,Oy+20);
  text('C',d1+2,d2);
  text('F',Ox-20, d2);
  text('B',d1*3/4,Oy+20 );
  text('E',d1*3/4,d2-10);
  text('D',d1*1/4,d2-10);
  text('a',(d1*3/4-Ox)/2+Ox,Oy-10 );
  text('t',d1*3/4-10,(Oy-d2)/2+d2 );
  

  text('L ABCD = a x t', 30,30 );
  
  
 
   }