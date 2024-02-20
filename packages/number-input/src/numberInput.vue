<template>
  <div class="ch-number-input"
       ref="inputRef"
       :class="{ 'ch-number-input-drag-tips': isDragTips, 'ch-number-input-drag-doing': isDragging, 'ch-number-input-edit': isEdit }">
    <div style="display: flex">
      <el-progress class="ch-number-input-progress" :duration="0" :style="{width: $attrs.width + 'px'}" :show-text="false" :stroke-width="12" :percentage="percentage"/>
      <el-input-number
                       :style="{width: ($attrs.width - 24) + 'px'}"
                       :="$attrs"
                       v-model="modelValueRef"
                       :controls="false"
                       @focus="isEdit=true"
                       @blur="handleBlur"
                       @click.passive="handleClick"
                       @mouseenter="handleMouseenter"
                       @mouseleave="handleMouseleave"
                       @mousedown.prevent="handleMousedown"
                       @mouseup="handleMouseup"
                       @mousemove="handleMousemove"
      />
    </div>
  </div>
</template>

<script setup>
import {defineEmits, defineOptions, defineProps, ref, useAttrs, watch} from "vue";
import {throttle} from "../../../src/utils/tool.js";

defineOptions({
  name: "ChNumberInput",
});

const props = defineProps({
  modelValue: {
    type: Number
  },
});

const $attrs = useAttrs();
const inputRef = ref();
const isDragTips = ref(false);
const isDragging = ref(false);
const isEdit = ref(false);
const timeoutId = ref(0);
const percentage = ref(0);

let max = ($attrs.max === +$attrs.max) ? $attrs.max : Infinity;
let min = ($attrs.min === +$attrs.min) ? $attrs.min : -Infinity;
// 限制最大移动速度 10%
let maxMovementX = Infinity;
if (max !== Infinity && min !== -Infinity) {
  maxMovementX = Math.max(Math.round((max - min) * 0.1), 1);
}

const emit = defineEmits(["update:modelValue", 'backEvt']);
const modelValueRef = ref(props.modelValue);
watch(() => props.modelValue, (newVal) => {
  modelValueRef.value = newVal;

  if(max !== Infinity && min !== -Infinity){
    percentage.value = ((newVal - min) / (max - min)) * 100;
  }
}, {
  immediate: true,
});
watch(() => modelValueRef.value, (newVal) => {
  emit("update:modelValue", newVal);
});

function handleClick() {
  inputRef.value.querySelector("input").select();
  isDragTips.value = false;
  isDragging.value = false;
}

function handleMouseenter() {
  if (!isEdit.value) {
    isDragTips.value = true;
  }
}

function handleBlur() {
  isEdit.value = false
  emit("backEvt", modelValueRef.value);
}

function handleMouseleave() {
  isDragTips.value = false;
  isDragging.value = false;
}

function handleMousedown() {
  timeoutId.value = setTimeout(() => {
    isDragging.value = true;
    inputRef.value.querySelector("input").requestPointerLock();
  }, 200);
}

function handleMouseup() {
  clearTimeout(timeoutId.value);
  isDragging.value = false;
  document.exitPointerLock();
  emit("backEvt", modelValueRef.value);
}

function handleMousemove(event) {
  if (isDragTips.value && isDragging.value && event.movementX) {

    let x = Math.abs(event.movementX);
    let timeout = 30;

    // 精细移动时，放缓
    if (x === 2) {
      x = 1;
      timeout = 45;
    }
    if (x === 1) {
      timeout = 60;
    }

    throttle(() => {
      const oldVal = modelValueRef.value;
      let step = $attrs.step || 1;
      let sign = event.movementX > 0 ? 1 : -1;
      let movementX = Math.min(x, maxMovementX) * sign;
      let newVal = movementX * step + oldVal;

      if (newVal > max) {
        newVal = max;
      } else if (newVal < min) {
        newVal = min;
      }

      modelValueRef.value = newVal;
      emit("backEvt", modelValueRef.value);
    }, timeout)
  }
}

</script>

<style lang="scss" scoped>
@import url("../style/numberInput.scss");
</style>
