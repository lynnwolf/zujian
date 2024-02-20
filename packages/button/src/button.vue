<template>
  <button
    class="qs-button"
    :class="[type ? 'el-button--' + type : '']"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script setup>
import { defineEmits, defineProps, defineOptions } from "vue";

defineOptions({
  name: "ChButton",
});

const props = defineProps({
  type: {
    type: String,
    default: "default",
  },
});

const emits = defineEmits(["click"]);

function handleClick(evt) {
  emits("click", evt);
}
</script>

<style lang="scss" scoped>
@import url("../style/button.scss");
</style>
