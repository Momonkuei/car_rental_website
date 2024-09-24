<template>
  <div class="product-item-collapsible" :class="{ active: isOpen }" @click="toggle">
    <button class="product-item-collapsible-btn fz-14">
      <span class="plus-icon"></span>
      <span class="product-item-collapsible-title">{{ title }}</span>
    </button>

    <div class="product-item-collapsible-inner">
      <div class="product-item-collapsible-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>
