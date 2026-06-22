```javascript
function calcular(){

const faturamento = Number(document.getElementById('faturamento').value);

const meta = Number(document.getElementById('meta').value);

const ticket = Number(document.getElementById('ticket').value);

const conversao = Number(document.getElementById('conversao').value);

const cpl = Number(document.getElementById('cpl').value);

const fee = Number(document.getElementById('plano').value);

if(!faturamento || !meta || !ticket || !conversao || !cpl || !fee){

alert('Preencha todos os campos.');

return;

}

const faturamentoExtra = faturamento * (meta/100);

const clientes = Math.ceil(faturamentoExtra/ticket);

const leads = Math.ceil(clientes/(conversao/100));

const investimentoAds = Math.ceil(leads*cpl);

const investimentoSemanal = Math.ceil(investimentoAds/4);

const investimentoDiario = Math.ceil(investimentoAds/30);

const investimentoTotal = investimentoAds + fee;

let velocimetro='';

let estrategia='';

if(investimentoTotal<=1500){

velocimetro='🟨 Conservador';

estrategia='💡 Crescimento gradual e validação do mercado.';

}

else if(investimentoTotal<=3500){

velocimetro='🟩 Recomendado';

estrategia='🚀 Cenário saudável para crescimento previsível.';

}

else{

velocimetro='🟦 Acelerado';

estrategia='🔥 Cenário ideal para escalar campanhas.';

}

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

<p>💼 <strong>Gestão estratégica:</strong> R$ ${fee.toLocaleString('pt-BR')}</p>

<h2>🏆 Total mensal: R$ ${investimentoTotal.toLocaleString('pt-BR')}</h2>

<div class="velocimetro">

${velocimetro}

</div>

<p>${estrategia}</p>

<div class="cta">

🤝 Gostou deste planejamento?

<br><br>

O próximo passo é formalizar a parceria comercial.

</div>

</div>

`;

}
```
