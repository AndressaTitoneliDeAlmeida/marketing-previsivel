function calcular(){

const faturamento=Number(document.getElementById('faturamento').value);

const meta=Number(document.getElementById('meta').value);

const ticket=Number(document.getElementById('ticket').value);

const conversao=Number(document.getElementById('conversao').value);

const cpl=Number(document.getElementById('cpl').value);


const faturamentoExtra=(faturamento*meta)/100;

const clientes=Math.ceil(faturamentoExtra/ticket);

const leads=Math.ceil(clientes/(conversao/100));

const investimentoAds=leads*cpl;

const semanal=investimentoAds/4;

const diario=investimentoAds/30;

const fee=800;

const total=investimentoAds+fee;


document.getElementById('resultado').style.display='block';

document.getElementById('dadosResultado').innerHTML=`

<p>💰 Faturamento adicional: <strong>R$ ${faturamentoExtra.toFixed(0)}</strong></p>

<p>👥 Clientes necessários: <strong>${clientes}</strong></p>

<p>🎯 Leads necessários: <strong>${leads}</strong></p>

<p>📢 Investimento em anúncios: <strong>R$ ${investimentoAds.toFixed(0)}</strong></p>

<p>📅 Investimento semanal: <strong>R$ ${semanal.toFixed(0)}</strong></p>

<p>☀️ Investimento diário: <strong>R$ ${diario.toFixed(0)}</strong></p>

<hr>

<p>💼 Fee de gestão: <strong>R$ 800</strong></p>

<p style="font-size:22px">

🏆 Total mensal: <strong>R$ ${total.toFixed(0)}</strong>

</p>

`;

}
