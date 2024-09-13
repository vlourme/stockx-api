# StockX API

An unofficial StockX API wrapper for Node.js and Browser.
Based on this free [StockX API](https://stockx.vlour.me/api).

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
