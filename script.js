```javascript
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

const faturamentoExtra = faturamento * (meta/100);

const clientes = Math.ceil(faturamentoExtra/ticket);

const leads = Math.ceil(clientes/(conversao/100));

const investimentoAds = Math.ceil(leads*cpl);

const investimentoSemanal = Math.ceil(investimentoAds/4);

const investimentoDiario = Math.ceil(investimentoAds/30);


// SISTEMA INTELIGENTE

let fee=0;

let nivel='';

let descricao='';

if(investimentoAds <= 500){

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

descricao='Ideal para empresas que desejam acelerar resultados e escalar suas operações.';

}

const investimentoTotal = investimentoAds + fee;


// VELOCÍMETRO

let velocimetro='';

if(investimentoTotal <=1500){

velocimetro='🟨 Baixo investimento';

}

else if(investimentoTotal <=3500){

velocimetro='🟩 Investimento recomendado';

}

else{

velocimetro='🟦 Investimento agressivo';

}


// RESULTADO

document.getElementById('resultado').innerHTML=`

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

<h2>🏆 Investimento total mensal: R$ ${investimentoTotal.toLocaleString('pt-BR')}</h2>

<h3>${velocimetro}</h3>

<div class="cta">

🤝 Este planejamento é uma projeção estratégica baseada nas informações fornecidas.

<br><br>

O próximo passo é formalizar a parceria comercial.

</div>

</div>

`;

}
```
