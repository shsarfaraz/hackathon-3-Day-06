export interface Product {
    _id: string;
    productname: string;
    _type: "product";
    image?: {
        asset: {
            _ref: string;
            _type: "image";
        };
    };
    price: number;
    description?: string;
    stockLevel: number; 
}
