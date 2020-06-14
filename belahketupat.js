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
        vertex(((d1-Ox)/2)+Ox, Oy);
      // Titik B
        vertex(d1,((Oy-d2)/2)+d2);
      // Titik C
        vertex(((d1-Ox)/2)+Ox, d2);
      // Titik D
        vertex(Ox, ((Oy-d2)/2)+d2);
      endShape(CLOSE);

  fill('#f44336');
      // Bidang PAD
      beginShape();
        vertex(Ox,Oy);
        vertex(((d1-Ox)/2)+Ox, Oy);
        vertex(Ox, ((Oy-d2)/2)+d2);
      endShape(CLOSE);
      // Bidang AQB
      beginShape();
        vertex(((d1-Ox)/2)+Ox, Oy);
        vertex(d1, Oy);
        vertex(d1,((Oy-d2)/2)+d2);
      endShape(CLOSE);
      // Bidang BRC
      beginShape();
        vertex(d1,((Oy-d2)/2)+d2);
        vertex(d1, d2);
        vertex(((d1-Ox)/2)+Ox, d2);
      endShape(CLOSE);
      // Bidang CSD
      beginShape();
        vertex(((d1-Ox)/2)+Ox, d2);
        vertex(Ox, d2);
        vertex(Ox, ((Oy-d2)/2)+d2);
      endShape(CLOSE);
  
  

  
  
  fill(0);

  textSize(20);
  // Garis d1
  line(Ox, ((Oy-d2)/2)+d2, d1,((Oy-d2)/2)+d2);
  // Garis d2
  line(((d1-Ox)/2)+Ox, Oy,((d1-Ox)/2)+Ox, d2);
  // Titik
  text('P', Ox-20,Oy+20);
  text('Q', d1+2, Oy+20);
  text('R',d1+2,d2);
  text('S',Ox-20, d2);
  text('A',d1/2,Oy+20 );
  text('B',d1+5, Oy-(Oy-d2)/2);
  text('C',d1/2,d2-10);
  text('D',Ox-15, Oy-(Oy-d2)/2);
  text('L ABCD = 1/2 x d1 x d2', 30,30 );
  
  
 
   }