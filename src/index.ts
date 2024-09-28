import axios from "axios";
import { MarketData, Product, SearchResults, VariantMarketData } from "./index.type";

enum StockXLocation {
    US = 'us',
    EU = 'eu',
}

/**
 * StockX API wrapper
 */
class StockXAPI {
    /**
     * The location of the StockX API.
     * @default StockXLocation.US
     */
    protected location: StockXLocation = StockXLocation.US;

    /**
     * Create a new StockXAPI instance.
     * @param {StockXLocation} location - The location of the StockX API.
     * @default StockXLocation.US
     */
    constructor(location: StockXLocation = StockXLocation.US) {
        this.location = location;
    }

    /**
     * Get the base URL of the StockX API.
     * @returns {string} The base URL of the StockX API.
     */
    protected get baseUrl(): string {
        switch (this.location) {
            case StockXLocation.US:
                return 'https://api.sneakersapi.dev';
            case StockXLocation.EU:
                return 'https://eu.api.sneakersapi.dev';
        }
    }

    /**
     * Count the number of products on StockX.
     * @param {string} query - The search query.
     * @returns {Promise<number>} The number of products.
     */
    async countProducts(): Promise<number> {
        const response = await axios.get(`${this.baseUrl}/stats`);
        return response.data.count;
    }

    /**
     * Check if the StockX API is healthy.
     * @returns {Promise<boolean>} Whether the StockX API is healthy.
     */
    async isHealthy(): Promise<boolean> {
        return await this.countProducts() > 0;
    }

    /**
     * Search for products on StockX.
     * @param {string} query - The search query.
     * @param {number} page - The page number.
     * @returns {Promise<SearchResults>} The search results.
     */
    async searchProducts(query: string, page: number = 1): Promise<SearchResults> {
        const response = await axios.get(`${this.baseUrl}/search?query=${query}&page=${page}`);
        return response.data;
    }

    /**
     * Get a product by its ID.
     * @param {string} productId - The ID of the product.
     * @returns {Promise<Product>} The product.
     */
    async getProduct(productId: string): Promise<Product> {
        const response = await axios.get(`${this.baseUrl}/product/${productId}`);
        return response.data;
    }

    /**
     * Get the market data for a product.
     * @param {string} productId - The ID of the product.
     * @returns {Promise<MarketData>} The market data.
     */
    async getMarketData(productId: string): Promise<MarketData[]> {
        const response = await axios.get(`${this.baseUrl}/product/${productId}/market`);
        return response.data;
    }

    /**
     * Get the market data for a variant of a product.
     * @param {string} productId - The ID of the product.
     * @param {string} variantId - The ID of the variant.
     * @returns {Promise<VariantMarketData>} The market data.
     */
    async getVariantMarketData(productId: string, variantId: string): Promise<VariantMarketData[]> {
        const response = await axios.get(`${this.baseUrl}/product/${productId}/market/${variantId}`);
        return response.data;
    }
}

export { StockXAPI, StockXLocation };
