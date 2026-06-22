function calcular() {

let faturamento = Number(document.getElementById("faturamento").value);

let crescimento = Number(document.getElementById("crescimento").value);

let estagio = Number(document.getElementById("estagio").value);

if (faturamento <= 0) {

alert("Informe o faturamento mensal da empresa.");

return;

}

let ticket;

let conversao;

let cpl;

if (estagio == 1) {

ticket = 150;
conversao = 5;
cpl = 5;

}

if (estagio == 2) {

ticket = 250;
conversao = 7;
cpl = 8;

}

if (estagio == 3) {

ticket = 400;
conversao = 10;
cpl = 12;

}

if (estagio == 4) {

ticket = 700;
conversao = 12;
cpl = 18;

}

let nomeEstagio = "";

if (estagio == 1) {

nomeEstagio = "🌱 Estou começando";

}

if (estagio == 2) {

nomeEstagio = "🚀 Já tenho alguns clientes";

}

if (estagio == 3) {

nomeEstagio = "🏢 Minha operação está estruturada";

}

if (estagio == 4) {

nomeEstagio = "👑 Quero escalar agressivamente";

}

let faturamentoExtra = faturamento * (crescimento / 100);

let clientes = Math.ceil(faturamentoExtra / ticket);

let leads = Math.ceil(clientes / (conversao / 100));

let anuncios = Math.ceil(leads * cpl);

let semanal = Math.ceil(anuncios / 4);

let diario = Math.ceil(anuncios / 30);

let fee = 800;

if (anuncios < 300) {

fee = 150;

}

else if (anuncios < 600) {

fee = 300;

}

else if (anuncios < 1000) {

fee = 500;

}

let investimentoTotal = anuncios + fee;

let barra = 30;

let cor = "#facc15";

let nivel = "🟨 Baixo investimento";

if (investimentoTotal >= 600) {

barra = 60;

cor = "#22c55e";

nivel = "🟩 Investimento recomendado";

}

if (investimentoTotal >= 1500) {

barra = 100;

cor = "#3b82f6";

nivel = "🟦 Investimento agressivo";

}

let pontuacao = 60;

if (estagio >= 2) {

pontuacao += 10;

}

if (estagio >= 3) {

pontuacao += 10;

}

if (estagio >= 4) {

pontuacao += 10;

}

if (faturamento >= 10000) {

pontuacao += 10;

}

let potencial = "Em desenvolvimento";

let escala = "Necessita estruturação";

let recomendacao = "Sua empresa ainda está em fase de estruturação.";

if (pontuacao >= 80) {

potencial = "Alto potencial";

escala = "Pronta para escalar";

recomendacao = "Sua empresa apresenta um excelente potencial de crescimento.";

}

const planejamento = {

dataSimulacao: new Date().toLocaleString("pt-BR"),

origem: "Marketing Previsível",

servico: "Gestão de Tráfego Pago",

faturamento,

crescimento,

estagio,

nomeEstagio,

faturamentoExtra,

clientes,

leads,

anuncios,

semanal,

diario,

fee,

investimentoTotal,

pontuacao,

potencial,

escala,

recomendacao

};

localStorage.setItem(

"planejamentoMarketing",

JSON.stringify(planejamento)

);

document.getElementById("resultado").innerHTML = `

<h2>📈 Cenário Projetado</h2>

<p>💰 Faturamento adicional: <strong>${faturamentoExtra.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}</strong></p>

<p>👥 Clientes necessários: <strong>${clientes}</strong></p>

<p>🎯 Leads necessários: <strong>${leads}</strong></p>

<p>📢 Investimento em anúncios: <strong>${anuncios.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}</strong></p>

<p>📅 Investimento semanal: <strong>${semanal.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}</strong></p>

<p>☀️ Investimento diário: <strong>${diario.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}</strong></p>

<p>👩‍💻 Investimento na sua especialista em Tráfego Pago: <strong>${fee.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}</strong></p>

<hr>

<h2>

🏆 Investimento total mensal recomendado:

${investimentoTotal.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}

</h2>

<hr>

<h3>🚀 Velocímetro</h3>

<p>${nivel}</p>

<div class="barra">

<div

class="preenchimento"

style="width:${barra}%;background:${cor};">

</div>

</div>

<hr>

<h3>🧠 Diagnóstico Inteligente</h3>

<p>⭐ Pontuação: <strong>${pontuacao}/100</strong></p>

<p>🎯 Potencial: <strong>${potencial}</strong></p>

<p>📈 Capacidade de escala: <strong>${escala}</strong></p>

<p>💡 Recomendação: <strong>${recomendacao}</strong></p>

`;

document.getElementById("areaParceria").style.display = "block";

}

function abrirFormularioAceite(){

window.location.href = "aceite.html";

}
