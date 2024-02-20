<template>
  <div class="tem-wrapper">
    <div>
      <h1>坐标输入框</h1>
      <ChCoordinateInput v-model="count" label="X" class="x" :min="1" :max="100" :precision="2"></ChCoordinateInput>
      <h1>数字输入框</h1>
      <ChNumberInput v-model="count" :min="1" :max="100" :precision="0"></ChNumberInput>
      <h1>按钮</h1>
      <ChButton @click="handleClick">count++</ChButton>

      <div class="card">
        <p>count--- is {{ count }}</p>
        <p>
          Edit
          <code>components/HelloWorld.vue</code> to test HMR
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getSearchQuerys } from "@/utils/tool.js";
import ChCoordinateInput from "/packages/coordinate-input/index.js"
import ChButton from '/packages/button/index.js'
import ChNumberInput from '/packages/number-input/index.js'
defineProps({
  msg: String,
});

let count = ref(null);

function handleClick() {
  count.value++;
}
</script>
<style lang="scss" scoped>
.tem-wrapper {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
