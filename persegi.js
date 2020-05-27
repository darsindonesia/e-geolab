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
  
   if (mouseX>Ox+5*s)
      {
        p=Ox+5*s;
        l=Oy-5*s 
      } else if (mouseX < Ox+s)
      {
        p = Ox+s;
        l=Oy-s;
      } else {
        p=mouseX;
        l=Oy-(mouseX-Ox);
      }
      
        
    

  fill('#42a5f5');
      beginShape();
        vertex(Ox, Oy);
        vertex(p, Oy);
        vertex(p, l);
        vertex(Ox,l)
      endShape(CLOSE);

  
  

  
  
  fill(0);

  textSize(20);
  text('A', Ox-20,Oy+20);
  text('B', p+2,Oy+20);
  text('C',p+2,l);
  text('D',Ox-20,l);
  text('s', p/2, Oy+20);
  text('s', p+5, 5+Oy-(Oy-l)/2);
  text('s', p/2, l-5);
  text('s', Ox-20, 5+Oy-(Oy-l)/2);
  text('Luas Persegi ABCD = p X l = s X s = s^2 ', 50,30 );
  
  
 
   }