export interface Contact {
    contactId: number;
    contactName: string;
    contactEmail: string;
    contactPhone: string;
}

export interface IVehicle {
    vehicleId: number;
    photo: string;
    brand: string;
    model: string;
    year: number;
    price: number;
    lastUpdate: Date;
    contact: Contact;
}
