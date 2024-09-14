# StockX API

An unofficial StockX API wrapper for Node.js and Browser.
Based on this free [StockX API](https://stockx.vlour.me/api).

Product IDs and variant IDs are same UUIDs used by StockX.

## Installation

```bash
npm install @vlourme/stockx-api
```

## Usage

```javascript
import { StockXAPI, StockXLocation } from "@vlourme/stockx-api";

const api = new StockXAPI(StockXLocation.US);
```

### Getting a product by its ID

```javascript
const product = await api.getProduct("e46adad2-21e2-48b5-86ca-9f9ebdc01322");
console.log(product);
```

### Searching for products

```javascript
const products = await api.searchProducts("Jordan 1");
console.log(products);
```

### Getting the market data for a product

```javascript
const marketData = await api.getMarketData(
  "e46adad2-21e2-48b5-86ca-9f9ebdc01322" // productId
);
console.log(marketData);
```

### Getting the market data for a variant of a product

```javascript
const variantMarketData = await api.getVariantMarketData(
  "aa7e8a4d-720f-4fe9-a0a9-f2b47b04bea7", // productId
  "8e2265bc-a210-494c-ba35-9e5d71e47b51" // variantId
);
console.log(variantMarketData);
```

### Counting products

```javascript
const count = await api.countProducts();
console.log(count);
```

### Checking if the API is healthy

```javascript
const isHealthy = await api.isHealthy();
console.log(isHealthy);
```
