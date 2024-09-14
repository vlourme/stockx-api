import { StockXAPI, StockXLocation } from './index';

describe('StockXAPI', () => {
    const locations = [StockXLocation.US, StockXLocation.EU];

    locations.forEach(location => {
        describe(`${location} location`, () => {
            let api: StockXAPI;

            beforeEach(() => {
                api = new StockXAPI(location);
            });

            it('should return the number of products', async () => {
                const count = await api.countProducts();
                expect(count).toBeGreaterThan(100_000);
            });

            it('should return true if the API is healthy', async () => {
                const isHealthy = await api.isHealthy();
                expect(isHealthy).toBe(true);
            });

            it('should return a product by its ID', async () => {
                const product = await api.getProduct('e46adad2-21e2-48b5-86ca-9f9ebdc01322');
                expect(product).toHaveProperty('id', 'e46adad2-21e2-48b5-86ca-9f9ebdc01322');
            });

            it('should search for products', async () => {
                const products = await api.searchProducts('Jordan 1');
                expect(products).toHaveProperty('hits');
            });

            it('should return the market data for a product', async () => {
                const marketData = await api.getMarketData('e46adad2-21e2-48b5-86ca-9f9ebdc01322');
                expect(marketData).toBeInstanceOf(Array);
                expect(marketData[0]).toHaveProperty('item_id', 'e46adad2-21e2-48b5-86ca-9f9ebdc01322');
            });

            it('should return the market data for a variant of a product', async () => {
                const variantMarketData = await api.getVariantMarketData('aa7e8a4d-720f-4fe9-a0a9-f2b47b04bea7', '8e2265bc-a210-494c-ba35-9e5d71e47b51');
                expect(variantMarketData).toBeInstanceOf(Array);
                expect(variantMarketData[0]).toHaveProperty('item_id', 'aa7e8a4d-720f-4fe9-a0a9-f2b47b04bea7');
            });
        });
    });
});