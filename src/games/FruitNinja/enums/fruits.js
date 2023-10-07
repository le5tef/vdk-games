export const FruitTypes = {
    CAR: 1,
    BOMB: 2,
}
export const FruitTypesOptions = {
    [FruitTypes.CAR]: {
        image: new URL('/src/assets/cars/prius1.png', import.meta.url).href,
        scale: [0.1, 0.3]
    },
    [FruitTypes.BOMB]: {
        image: new URL('/src/assets/cars/png-transparent-electric-motorcycles-and-scooters-electric-vehicle-motorized-scooter-scooter-bicycle-frame-scooter-motorcycle.png', import.meta.url).href,

        scale: [0.3, 0.3]
    }
}