<template>
  <div ref="ninja" class="display"></div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {useNinjaStore} from "../games/FruitNinja/store";
import fruitNinja from '../games/FruitNinja/main'

const ninjaStore = useNinjaStore()

const ninja = ref()


onMounted(() => {
  fruitNinja.init({
    view: ninja.value
  })
})
</script>

<style lang="stylus" scoped>
.display
  overflow hidden
  width 100vw
  height 100vh
</style>