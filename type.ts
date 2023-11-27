export interface Products {
    _id: number;
    title: string;
    isNew: boolean;
    oldPrice: number;
    price: number;
    description: string;
    image: string;
    rating: number;
    quantity: number;
    category: string;
}

export interface ProductProps {
    product: Products;
}

export interface StateProps {
    shopping: {
        productData: [];
        userInfo: {},
        orderData: {
            order: Products[];
        }
    }
}