export interface GpuPrices {
    gpuid: number
    is_available: boolean
    price: number
    updated_at: string | Date
}

export interface Gpus {
    id: number
    name: string
    url: string
    slug: string
    website: string
}

export interface PriceChange {
    id: number
    is_available: boolean
    price: number
    updated_at: Date
}

export interface GpuPriceChange {
    gpuid: number
    changes: PriceChange[]
}

export interface GpuEmailSubscriberDetailed {
    gpuid: number
    emailid: number
    email: string
    name: string
    url: string
}
