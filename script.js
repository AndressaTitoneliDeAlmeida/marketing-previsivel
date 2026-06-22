function calcular(){

const faturamento = Number(document.getElementById('faturamento').value);

const meta = Number(document.getElementById('meta').value);

const ticket = Number(document.getElementById('ticket').value);

const conversao = Number(document.getElementById('conversao').value);

const cpl = Number(document.getElementById('cpl').value);

if(

!faturamento ||

!meta ||

!ticket ||

!conversao ||

!cpl

){

alert('Preencha todos os campos.');

return;

}

const faturamentoAdicional = faturamento * (meta/100);

const clientes = Math.ceil(faturamentoAdicional/ticket);

const leads = Math.ceil(clientes/(conversao/100));

const anuncios = Math.ceil(leads*cpl);

const semanal = Math.ceil(anuncios/4);

const diario = Math.ceil(anuncios/30);

let fee = 800;

if(anuncios <=300){

fee = 150;

}

else if(anuncios <=700){

fee = 300;

}

else if(anuncios <=1200){

fee = 500;

}

let nivel = "";

let cor = "";

let largura = 0;

if(anuncios <=300){

nivel="🟨 Baixo investimento";

cor="#facc15";

largura=33;

}

else if(anuncios <=1000){

nivel="🟩 Investimento recomendado";

cor="#22c55e";

largura=66;

}

else{

nivel="🟦 Investimento agressivo";

cor="#2563eb";

largura=100;

}

let pontuacao = 50;

if(conversao >=10){

pontuacao += 20;

}

if(ticket >=300){

pontuacao += 15;

}

if(meta <=20){

pontuacao += 15;

}

let potencial = "";

let escala = "";

if(pontuacao <70){

potencial="Em desenvolvimento";

escala="Necessita estruturação.";

}

else if(pontuacao <90){

potencial="Bom potencial";

escala="Pronta para crescer.";

}

else{

potencial="Excelente";

escala="Pronta para escalar agressivamente.";

}

const total = anuncios + fee;

document.getElementById('resultado').innerHTML = `

<div class="resultado-card">

<h2>📈 Cenário Projetado</h2>

💰 Faturamento adicional: <strong>R$ ${faturamentoAdicional.toFixed(0)}</strong><br>

👥 Clientes necessários: <strong>${clientes}</strong><br>

🎯 Leads necessários: <strong>${leads}</strong><br>

📢 Investimento em anúncios: <strong>R$ ${anuncios}</strong><br>

📅 Investimento semanal: <strong>R$ ${semanal}</strong><br>

☀️ Investimento diário: <strong>R$ ${diario}</strong><br>

💼 Fee de gestão: <strong>R$ ${fee}</strong><br>

<hr>

🏆 Total mensal: <strong>R$ ${total}</strong>

<hr>

<h3>🚀 Velocímetro</h3>

${nivel}

<div class="velocimetro">

<div class="barra"

style="width:${largura}%;background:${cor};">

</div>

</div>

<hr>

<h3>🧠 Diagnóstico Comercial Inteligente</h3>

⭐ Pontuação: <strong>${pontuacao}/100</strong><br>

🎯 Potencial: <strong>${potencial}</strong><br>

📈 Capacidade de escala: <strong>${escala}</strong>

</div>

`;

}
