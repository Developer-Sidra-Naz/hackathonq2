import { defineQuery } from "next-sanity";


export const allProduct = defineQuery(`
    *[_type=="car]{
    _id,
    name,
    brand,
    type,
    fuelCapacity,
    transmission,
    seatingCapacity,
    pricePerDay,
    originalPrice,
    tags,
    "imageurl":image.asset->url
    }
    `)


    export const fourProduct = defineQuery(`
        *[_type=="car"][0...3]{
        _id,
        name,
        brand,
        type,
        fuelCapacity,
        transmission,
        seatingCapacity,
        pricePerDay,
        originalPrice,
        tags,
        "imageurl":image.asset->url
        }
        `)