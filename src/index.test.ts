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
        });
    });
});