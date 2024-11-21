<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Example',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      message: 'This is a TypeScript component'
    }
  }
})
</script> 