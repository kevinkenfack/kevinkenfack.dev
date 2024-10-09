<script setup lang="ts">
const { appName } = useAppConfig()

defineProps({
  isText: {
    type: Boolean,
    default: false,
  },
  size: {
    type: Number,
    default: 6,
  },
})
</script>

<template>
  <NuxtLink
    to="/"
    class="flex shrink-0 items-center"
    aria-label="Go back to home page"
  >
    <img
    src="/assets/kevin-kenfack.png"
    :class="size ? 'h-' + size : 'h-6'"
    class="block w-auto"
  />
    <span
      v-if="isText"
      class="ml-1 text-xs font-semibold"
    >
      {{ appName }}
    </span>
  </NuxtLink>
</template>
