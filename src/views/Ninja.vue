<template>
  <div id="display" class="display"></div>
</template>

<script setup>
import * as PIXI from 'pixi.js';
import {onMounted, ref} from "vue";

const app = ref()
const init = () => {

  app.value = new PIXI.Application({background: '#1099bb', resizeTo: window});

  document.getElementById('display').appendChild(app.value.view);

// create a new Sprite from an image path
  const bunny = PIXI.Sprite.from('https://pixijs.com/assets/bunny.png');

// center the sprite's anchor point
  bunny.anchor.set(0.5);

// move the sprite to the center of the screen
  bunny.x = app.value.screen.width / 2;
  bunny.y = app.value.screen.height - 20;

  app.value.stage.addChild(bunny);

// Listen for animate update
  app.value.ticker.add((delta) => {
    // just for fun, let's rotate mr rabbit a little
    // delta is 1 if running at 100% performance
    // creates frame-independent transformation
    bunny.rotation += 0.1 * delta;
  });
}

onMounted(() => {
  init()
})
</script>

<style lang="stylus" scoped>
.display
  overflow hidden
  width 100vw
  height 100vh
</style>