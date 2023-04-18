function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  var start = 0;
  var stop = 2*PI*0.25;
  
  fill(4,128,129)
  arc(200,200,300,300,start,stop, PIE)
  
  fill(6,214,160)
  start = stop;
  stop = start + 2*PI*0.2
  arc(200,200,300,300,start,stop, PIE)
  
  fill(84,198,235)
  start = stop;
  stop = start + 2*PI*0.2
  arc(200,200,300,300,start,stop, PIE)
  
  fill(138,137,192)
  start = stop;
  stop = start + 2*PI*0.05
  arc(200,200,300,300,start,stop, PIE)
  
  fill(205,162,171)
  start = stop;
  stop = start + 2*PI*0.3
  arc(200,200,300,300,start,stop, PIE)
  
  fill(10)
  text('Comedy',50,390)
  text('Action',125,390)
  text('SciFi', 190,390)
  text('Drama',245,390)
  text('Romance',305,390)
  
  fill(6,214,160)
  square(35,380,10)
  fill(4,128,129)
  square(110,380,10)
  fill(84,198,235)
  square(170,380,10)
  fill(138,137,192)
  square(230,380,10)
  fill(205,162,171)
  square(290,380,10)
  
  fill(255,255,255)
  text('25%',250,260)
  text('20%',140,260)
  text('20%',100,180)
  text('5%', 150,120)
  text('30%',230,130)
  
  
}