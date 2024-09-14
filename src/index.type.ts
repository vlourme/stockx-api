export interface SearchResults {
    hits: Product[]
    processingTimeMs: number
    query: string
    totalHits: number
    hitsPerPage: number
    page: number
    totalPages: number
}

export interface Product {
    age_group: string
    availability: string
    avg_price: number
    base_price: number
    brand: string
    category: string
    collaboration: string
    color: string
    condition: string
    currency: string
    description: string
    gender: string
    gtin: string
    id: string
    image: string
    inserted_at: string
    is_bundle: boolean
    labels: string[]
    link: string
    max_price: number
    min_price: number
    release_day: string
    release_month: string
    release_year: string
    retail_price: string
    size_system: string
    sku: string
    title: string
    variants: Variant[]
}

export interface Variant {
    currency: string
    link: string
    price: number
    size: string
}

export interface MarketData {
    item_id: string
    median_price: number
    avg_price: number
    date: string
}

export interface VariantMarketData {
    item_id: string
    variant_id: string
    size: string
    price: number
    date: string
}