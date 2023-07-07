console.log("This code is disgusting dont look at it")
const btc = document.getElementsByClassName("btc")[0]
const eth = document.getElementsByClassName("eth")[0]
const doge = document.getElementsByClassName("doge")[0]
const sol = document.getElementsByClassName("sol")[0]
const ltc = document.getElementsByClassName("ltc")[0]
const usdt = document.getElementsByClassName("usdt")[0]
const usdc = document.getElementsByClassName("usdc")[0]
const tip = document.getElementsByClassName("tipInput")[0]
const total = document.getElementsByClassName("total")[0]

const price = 10

function update(price){

	p_btc = JSON.parse(httpGet(`https://api.coinconvert.net/convert/usd/btc?amount={price}`)).BTC.toFixed(10);
	btc.innerHTML = `${p_btc}<mark> BTC</mark>`

	p_eth = convert.USD.ETH(price).toFixed(10);
	eth.innerHTML = `${p_eth}<mark> ETH</mark>`

	p_doge = convert.USD.DOGE(price).toFixed(10);
	doge.innerHTML = `${p_doge}<mark> DOGE</mark>`

	p_sol = convert.USD.SOL(price).toFixed(10);
	sol.innerHTML = `${p_sol}<mark> SOL</mark>`

	p_ltc = convert.USD.LTC(price).toFixed(10);
	ltc.innerHTML = `${p_ltc}<mark> LTC</mark>`

	p_usdt = convert.USD.USDT(price).toFixed(10);
	usdt.innerHTML = `${p_usdt}<mark> USDT</mark>`

	p_usdc = convert.USD.USDC(price).toFixed(10);
	usdc.innerHTML = `${p_usdc}<mark> USDC</mark>`
};

function updatePrices() {
	p_tip = tip.value
	total.innerHTML = `Total: ${Number(price) + Number(p_tip)}$`
	update(Number(price) + Number(p_tip))
}

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

update(price)
