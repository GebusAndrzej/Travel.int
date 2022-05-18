import { LocationModel } from "../model/locationModel";

import canyon from '../assets/images/places/0.jpg';
import wtc from '../assets/images/places/1.jpg';
import boat from '../assets/images/places/2.jpg';
import hills from '../assets/images/places/3.jpg';
import tokyo from '../assets/images/places/4.jpg';
import baloons from '../assets/images/places/6.jpg';
import forest from '../assets/images/places/7.jpg';
import fortress from '../assets/images/places/8.jpg';


const allLocations: LocationModel[] = [
    {
        img: canyon,
        title: "The Grand Canyon",
        description: "The biggest and the most beautiful canyon in the world",
        location: ["Arizona","USA"],
        price: 150
    },
    {
        img: wtc,
        title: "New York, WTC",
        description: "The highest point of the New York. One of the centers of world trade",
        location: ["NYC","USA"],
        price: 180
    },
    {
        img: boat,
        title: "Bali Beaches",
        description: "Amazing views from the cleanest beaches in the world",
        location: ["Bali","Indonesia"],
        price: 90
    },
    {
        img: hills,
        title: "Snow hills",
        description: "Great skiing opportunity with a beautiful view",
        location: ["Carpati","ukraine"],
        price: 75
    },
    {
        img: tokyo,
        title: "Tokyo temples",
        description: "Great opportunity to explore traditional Japanese culture",
        location: ["Tokyo","Japan"],
        price: 120
    },
    {
        img: forest,
        title: "Snow Forest",
        description: "Taste the cold and beauty of the Russian forest in winter",
        location: ["Camchatka","Russia"],
        price: 60
    },
    {
        img: baloons,
        title: "Cappadocia",
        description: "The biggest balloon show in the world",
        location: ["Cappad","Turkey"],
        price: 70
    },
    {
        img: fortress,
        title: "Ackerman Fortress",
        description: "The oldest Black Sea fortress with a rich history",
        location: ["Odes...","Ukraine"],
        price: 40
    },
]

export const mainPageLocations: LocationModel[] = [
    allLocations[0],
    allLocations[1],
    allLocations[2],
    allLocations[3],
    allLocations[4],
    allLocations[5],
    allLocations[6],
    allLocations[7],
]

export const searchPageLocations: LocationModel[] = [
    allLocations[0],
    allLocations[1],
    allLocations[2],
    allLocations[3],
    allLocations[4],
    allLocations[5],
    allLocations[6],
    allLocations[7],
    allLocations[1],
    allLocations[3],
    allLocations[0],
    allLocations[2],
    allLocations[2],
    allLocations[0],
    allLocations[3],
    allLocations[1],
]

export const locationPageLocations: LocationModel[] = [
    allLocations[0],
    allLocations[1],
    allLocations[2],
    allLocations[3],
    allLocations[4],
    allLocations[5],
    allLocations[6],
    allLocations[7],
    allLocations[1],
    allLocations[3],
    allLocations[0],
    allLocations[2],
]