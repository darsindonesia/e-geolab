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
  
  

  
 
  if (mouseX < 150){
    p = Ox+s; 
    pb=1;
    if(mouseY>tinggi-s){
    l=Oy-s;
    lb=1;
    }else if(mouseY>Oy-2*s){
    l=Oy-2*s;
    lb=2;
    }else if(mouseY>Oy-3*s){
    l=Oy-3*s;
    lb=3;
    }else if(mouseY>Oy-4*s){
    l=Oy-4*s;
    lb=4;
    }else if(mouseY<Oy-4*s){
    l=Oy-5*s;
    lb=5;
    }
  } else if(mouseX<250){
    p=Ox+2*s;
    pb=2;
    if(mouseY>tinggi-s){
    l=Oy-s;
    lb=1;
    }else if(mouseY>Oy-2*s){
    l=Oy-2*s;
    lb=2;
    }else if(mouseY>Oy-3*s){
    l=Oy-3*s;
    lb=3;
    }else if(mouseY>Oy-4*s){
    l=Oy-4*s;
    lb=4;
    }else if(mouseY<Oy-4*s){
    l=Oy-5*s;
    lb=5;
    }
  }else if(mouseX<350){
    p=Ox+3*s;
    pb=3;
    if(mouseY>tinggi-s){
    l=Oy-s;
    lb=1;
    }else if(mouseY>Oy-2*s){
    l=Oy-2*s;
    lb=2;
    }else if(mouseY>Oy-3*s){
    l=Oy-3*s;
    lb=3;
    }else if(mouseY>Oy-4*s){
    l=Oy-4*s;
    lb=4;
    }else if(mouseY<Oy-4*s){
    l=Oy-5*s;
    lb=5;
    }
  }else if(mouseX<450){
    p=Ox+4*s;
    pb=4;
    if(mouseY>tinggi-s){
    l=Oy-s;
    lb=1;
    }else if(mouseY>Oy-2*s){
    l=Oy-2*s;
    lb=2;
    }else if(mouseY>Oy-3*s){
    l=Oy-3*s;
    lb=3;
    }else if(mouseY>Oy-4*s){
    l=Oy-4*s;
    lb=4;
    }else if(mouseY<Oy-4*s){
    l=Oy-5*s;
    lb=5;
    }
  }else if(mouseX>450){
    p=Ox+5*s;
    pb=5;
    if(mouseY>tinggi-s){
    l=Oy-s;
    lb=1;
    }else if(mouseY>Oy-2*s){
    l=Oy-2*s;
    lb=2;
    }else if(mouseY>Oy-3*s){
    l=Oy-3*s;
    lb=3;
    }else if(mouseY>Oy-4*s){
    l=Oy-4*s;
    lb=4;
    }else if(mouseY<Oy-4*s){
    l=Oy-5*s;
    lb=5;
    }
  }
  
  fill(0);
  textSize(20);
  text('Panjang = '+pb+ ' ;  Lebar = '+lb+' ;  Luas daerah = '+pb*lb, 50,30 );
  
  fill('#42a5f5');
  beginShape();
    vertex(Ox, Oy);
    vertex(p, Oy);
    vertex(p, l);
    vertex(Ox, l);
  endShape(CLOSE);
  
 
  
  strokeWeight(4);
  
  //   Membuat garis-garis vertikal
  line(Ox,50, Ox, tinggi);
  line(Ox+s,50, Ox+s, tinggi);
  line(Ox+2*s,50, Ox+2*s, tinggi);
  line(Ox+3*s,50, Ox+3*s, tinggi);
  line(Ox+4*s,50, Ox+4*s, tinggi);
  line(Ox+5*s,50, Ox+5*s, tinggi);
  
  
  
// Membuat garis-garis horizaontal
  line(0,Oy, lebar, Oy);
  line(0,Oy-s, lebar, Oy-s);
  line(0,Oy-2*s, lebar, Oy-2*s);
  line(0,Oy-3*s, lebar, Oy-3*s);
  line(0,Oy-4*s, lebar, Oy-4*s);
  line(0,Oy-5*s, lebar, Oy-5*s);
}