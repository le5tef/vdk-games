import * as PIXI from "pixi.js";
import {FruitTypesOptions} from "../enums/fruits";
import {app} from "../app";


export default ({type, x, y}) => {
    const options = FruitTypesOptions[type]
    let obj = PIXI.Sprite.from(options.image);


    let angle = Math.floor((Math.random() * 10))
    if (x < app.screen.width / 2) {
        angle = -angle - 75
    } else {
        angle = -angle - 105
    }
    console.debug("ANGLE", angle)

    obj.x = x
    obj.y = y
    obj.type = type
    obj.anchor.set(0.5)
    if (options.scale) {
        obj.scale.set(...options.scale)
    }

    let time = 0
    const angleRad = angle * Math.PI / 180
    const cos = Math.cos(angleRad)
    const sin = Math.sin(angleRad)
    const g = -40


    const distanceBoundaries = [
        app.screen.width - obj.x,
        obj.x
    ]
    const speed = Math.min(
        Math.sqrt((app.screen.height * 0.9) * 2 * -g / Math.pow(sin, 2)),
        Math.sqrt(Math.abs(Math.max(...distanceBoundaries) * g / Math.sin(angleRad * 2)))
    )
    console.log("SPEED", speed, Math.sqrt(app.screen.height * 2 * -g / Math.pow(sin, 2)), Math.min(app.screen.width - obj.x, obj.x) * g / Math.sin(angleRad * 2))

    let graphics = new PIXI.Graphics()
    const move = (delta) => {
        time += delta * 0.2
        // obj.x = x+500*Math.cos(time % 3600)
        // obj.y = y+500*Math.sin(time % 3600)
        obj.x = x + (speed * time * cos)
        obj.y = y + ((speed * time * sin) - (g * Math.pow(time, 2) / 2))

        // app.stage.addChild(obj.hitArea)
        // if (graphics) {
        //     app.stage.removeChild(graphics)
        // }
        // graphics = new PIXI.Graphics()
        // graphics.beginFill(0xFFFF00);
        // graphics.lineStyle(5, 0xFF0000);
        // graphics.alpha = 0.5
        // graphics.drawRect(obj.x - obj.width / 2, obj.y - obj.height / 2, obj.width, obj.height)
        // app.stage.addChild(graphics)
        // console.log(time)
    }

    app.stage.eventMode = 'static'
    app.stage.hitArea = app.screen

    const onMousemove = (event) => {
        let x = event.client.x
        let y = event.client.y
        if (
            !(
                (x > obj.x - obj.width / 2 && x < obj.x + obj.width / 2)
                && (y > obj.y - obj.height / 2 && y < obj.y + obj.height / 2)
            )
        ) {
            return
        }

        // console.log(event)
        const boomObj = PIXI.Sprite.from(new URL("/src/assets/cars/boom.gif", import.meta.url).href);
        boomObj.x = obj.x
        boomObj.y = obj.y
        boomObj.anchor.set(0.5)
        app.stage.addChild(boomObj)
        setTimeout(() => app.stage.removeChild(boomObj), 2000)

        app.ticker.remove(move);
        app.stage.removeChild(obj)
        app.stage.removeEventListener("mousemove", onMousemove)
    }

    app.stage.on("mousemove", onMousemove)
    app.ticker.add(move);

    return {
        obj,
    }
}