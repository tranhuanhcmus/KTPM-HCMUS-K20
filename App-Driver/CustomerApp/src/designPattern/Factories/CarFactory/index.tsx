import { CarType } from "../../../models/Car/CarType";
import { Images } from './../../../configs/images';
import DriverProfile from './../../../component/Profile/Driver';
import { UserInformation } from "../../../appData/user/User";
import { ImageSourcePropType } from "react-native";

interface ICar {
    countPrice(distance: number): number;
}

export type CarProps = {
    pricePerKm: number;
    vehicleid: string;
    vehicletype: CarType;
    brandname: string;
    image?:any;
};

class Car implements ICar {
    public data: CarProps ;

    constructor(data: CarProps) {
        this.data = { ...data };
    }

    public countPrice(distance: number): number {
        return this.data.pricePerKm * distance;
    }
    
}

class Seat4Car extends Car {
    constructor(data: CarProps) {
        super(data);
        this.data.image = Images.Seat4Car;
    }
}

class Seat7Car extends Car {
    constructor(data: CarProps) {
        super(data);
        this.data.image = Images.Seat7Car;
    }
}

export class CarFactory {
    private static instance: CarFactory | null = null;

    private constructor() {}

    public static getInstance(): CarFactory {
        if (CarFactory.instance === null) {
            CarFactory.instance = new CarFactory();
        }
        return CarFactory.instance;
    }

    public factoryMethod(data: UserInformation): Car {
        const priceCarTypes = {
            [CarType.SEAT_4]: 100,
            [CarType.SEAT_7]: 200,
        };

        const initData: CarProps = {
            pricePerKm: priceCarTypes[data.vehicletype] || 0, // Initialize pricePerKm directly
            vehicleid: data.vehicleid,
            brandname: data.brandname,
            vehicletype: data.vehicletype,
        };

        switch (data.vehicletype) {
            case CarType.SEAT_4:
                return new Seat4Car(initData);
            case CarType.SEAT_7:
                return new Seat7Car(initData);
            default:
                throw new Error("Invalid Car Type");
        }
    }
}
