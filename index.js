const ccxt = require('ccxt');

const exchange = new ccxt.binance({
  apiKey: 'YOUR_API_KEY',
  secret: 'YOUR_SECRET_KEY',
});

const symbol = 'BTC/USDT';
const targetPrice = 50000;
const amount = 0.001;

async function buyCrypto() {
  const ticker = await exchange.fetchTicker(symbol);
  const lastPrice = ticker.last;
  if (lastPrice >= targetPrice) {
    console.log(`Buying ${amount} ${symbol} at ${lastPrice}`);
    const order = await exchange.createMarketBuyOrder(symbol, amount);
    console.log(`Order created: ${order.id}`);
  }
}

setInterval(buyCrypto, 60000); // Проверять цену каждые 60 секунд
