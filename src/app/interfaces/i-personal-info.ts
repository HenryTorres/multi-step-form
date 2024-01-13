export interface IPersonalInfo {
    name: string;
    email: string;
    phone: string;
}

export interface IPlan {
    arcade: string;
    advance: string;
    pro: string;
    priceArcade: number;
    priceAdvance: number;
    pricePro: number;
    yearly: boolean;
}

export interface IAddOn {
    onlineChecked: boolean;
    largerChecked: boolean;
    customizableChecked: boolean;
    priceOnline: number;
    priceLarger: number;
    priceCustomizable: number;
}