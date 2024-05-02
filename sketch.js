let P = []; //dari solve()
let t = []; //dari solve()
let k; // Materi Kelas: Input user
let K = 300; // Tugas; r dan k input user

//ini bisa juga jadi input
let P0 = 20;
let dt = 0.1;
let tMax = 10;
let grafik; //chart JS
function setup() {
  createCanvas(400, 400);
  k = createInput("0.8"); // input default adalah 0.8
  k.position(20, 40)
  let p = createP("Konstanta Pertumbuhan") //teks biasa
  p.style('fontsize', '14px');
  p.position(50, 0);
  
  grafik = new Chart(this, config);
  
  //baris program untuk merespon input user
  solve(); // untuk inisiasi jalankan terlebih dahulu solve()
  k.changed(solve); // jika input berganti, jalankan fungsi solve
}

function draw() {
  background(220);
  
  grafik.update();
  
}


function solve(){
  P[0] = P0;
  t[0] = 0;
  let ks = float(k.value());
  let iterNum = int(tMax / dt);
  
  for (i=0; i < iterNum; i++){
    P[i+1] = P[i] + dt * ks * P[i] *(1 - P[i]/K)
    t[i+1] = (i + 1)*dt;
  }
}