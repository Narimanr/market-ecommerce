export interface iCategory {
    title: string;
    slug: string;
    count: string;
    image: string;
}

export interface iInvoiceSummary {
    subtotal: string;
    total: string;
    discount?: string;
    shipping: string;
}

export interface iProduct {
    id: string; 
    category: string;
    catSlug: string;
    title: string;
    price: string;
    oldPrice?: string;
    image: string;
    gallery?: string[];
    banner?: string;
};

export interface iSlide {
    id: string;
    url: string;
}

export interface iSpecial {
    title: string;
    subtitle: string;
    image: string;
    color?: string;
}