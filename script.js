function calcular(){

const faturamento = Number(document.getElementById('faturamento').value);

const meta = Number(document.getElementById('meta').value);

const ticket = Number(document.getElementById('ticket').value);

const conversao = Number(document.getElementById('conversao').value);

const cpl = Number(document.getElementById('cpl').value);


if(!faturamento || !meta || !ticket || !conversao || !cpl){

alert('Preencha todos os campos.');

return;

}


// CÁLCULOS

const faturamentoExtra = faturamento * (meta/100);

const clientes = Math.ceil(faturamentoExtra/ticket);

const leads = Math.ceil(clientes/(conversao/100));

const investimentoAds = Math.ceil(leads*cpl);

const investimentoSemanal = Math.ceil(investimentoAds/4);

const investimentoDiario = Math.ceil(investimentoAds/30);


// NÍVEL ESTRATÉGICO

let fee=0;

let nivel='';

let descricao='';


if(investimentoAds <=500){

fee=150;

nivel='🌱 Início Estruturado';

descricao='Ideal para empresas que estão iniciando sua presença digital.';

}

else if(investimentoAds <=1500){

fee=500;

nivel='🚀 Crescimento Estratégico';

descricao='Ideal para empresas em expansão e crescimento consistente.';

}

else{

fee=800;

nivel='👑 Escala Empresarial';

descricao='Ideal para empresas que desejam acelerar seus resultados.';

}


const investimentoTotal = investimentoAds + fee;


// VELOCÍMETRO

let velocimetro='';


if(investimentoTotal <=1500){

velocimetro='🟨 Conservador';

}

else if(investimentoTotal <=3500){

velocimetro='🟩 Recomendado';

}

else{

velocimetro='🟦 Acelerado';

}


// DIAGNÓSTICO

let pontuacao = 0;


// FATURAMENTO

if(faturamento <=10000){

pontuacao +=15;

}

else if(faturamento <=30000){

pontuacao +=25;

}

else{

pontuacao +=35;

}


// META

if(meta <=10){

pontuacao +=10;

}

else if(meta <=20){

pontuacao +=15;

}

else{

pontuacao +=20;

}


// CONVERSÃO

if(conversao <=10){

pontuacao +=10;

}

else if(conversao <=20){

pontuacao +=15;

}

else{

pontuacao +=20;

}


// TICKET

if(ticket <=300){

pontuacao +=10;

}

else if(ticket <=800){

pontuacao +=15;

}

else{

pontuacao +=20;

}


// CLASSIFICAÇÃO

let potencial='';

let escala='';


if(pontuacao <=40){

potencial='🔴 Potencial Inicial';

escala='Baixa';

}

else if(pontuacao <=70){

potencial='🟡 Potencial Moderado';

escala='Média';

}

else if(pontuacao <=90){

potencial='🟢 Alto Potencial';

escala='Boa';

}

else{

potencial='🔵 Potencial de Escala';

escala='Excelente';

}


// RESULTADO

document.getElementById('resultado').innerHTML = `

<div class="resultado">

<h2>📈 Cenário Projetado</h2>

<p>💰 <strong>Faturamento adicional:</strong> R$ ${faturamentoExtra.toLocaleString('pt-BR')}</p>

<p>👥 <strong>Clientes necessários:</strong> ${clientes}</p>

<p>🎯 <strong>Leads necessários:</strong> ${leads}</p>

<p>📢 <strong>Investimento em anúncios:</strong> R$ ${investimentoAds.toLocaleString('pt-BR')}</p>

<p>📅 <strong>Investimento semanal:</strong> R$ ${investimentoSemanal.toLocaleString('pt-BR')}</p>

<p>☀️ <strong>Investimento diário:</strong> R$ ${investimentoDiario.toLocaleString('pt-BR')}</p>

<hr>

<h3>🧠 Diagnóstico Estratégico</h3>

<p><strong>Nível identificado:</strong> ${nivel}</p>

<p>${descricao}</p>

<p><strong>💼 Gestão estratégica:</strong> R$ ${fee.toLocaleString('pt-BR')}</p>

<hr>

<h3>🧠 Diagnóstico Comercial Inteligente</h3>

<p><strong>Pontuação:</strong> ${pontuacao}/100</p>

<p><strong>Potencial identificado:</strong> ${potencial}</p>

<p><strong>Capacidade de escala:</strong> ${escala}</p>

<hr>

<h2>🏆 Investimento total mensal: R$ ${investimentoTotal.toLocaleString('pt-BR')}</h2>

<div class="velocimetro">

${velocimetro}

</div>

<div class="cta">

🤝 Este planejamento é uma projeção estratégica baseada nas informações fornecidas.

<br><br>

O próximo passo é formalizar a parceria comercial.

</div>

</div>

`;

}
