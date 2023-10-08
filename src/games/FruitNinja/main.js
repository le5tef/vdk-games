import {useNinjaStore} from "./store";
import Fruit from './models/fruit'
import {app} from './app'
import {FruitTypes} from './enums/fruits'

const init = ({view}) => {


    view.appendChild(app.view);

// create a new Sprite from an image path

//
// // center the sprite's anchor point
//     bunny.anchor.set(0.5);
//
// // move the sprite to the center of the screen
//     bunny.x = app.screen.width / 2;
//     bunny.y = app.screen.height - 20;
//
//     app.stage.addChild(bunny);

// Listen for animate update

    setInterval(createFruit, 1200)

}

const createFruit = () => {
    const fruit = Fruit({
        x: Math.random()*app.screen.width,
        y: app.screen.height,
        // x: (app.screen.width - 300) * Math.random() + 300,
        // y: app.screen.height ,
        type: Math.random() > 0.3 ? FruitTypes.CAR : FruitTypes.BOMB,


    })
    app.stage.addChild(fruit.obj);
    const ninjaStore = useNinjaStore()
    ninjaStore.addObjective(fruit.obj)
}

export default {
    init
}