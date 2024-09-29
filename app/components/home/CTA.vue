<script setup lang="ts">
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 sm:gap-2">
    <div class="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-2">
      <UTooltip
        :text="$t('global.email')"
        :shortcuts="['⌘', 'O']"
      >
        <SpotlightButton>
          <NuxtLink
            class="white-gradient relative flex items-center justify-center gap-2 transition-all duration-200"
            to="/contact"
          >
            {{ $t("global.contact") }}
            <UIcon
              name="heroicons-envelope"
              class="size-5 text-white/80"
              aria-hidden="true"
            />
          </NuxtLink>
        </SpotlightButton>
      </UTooltip>
      <MeetingButton />
    </div>
    <NuxtLink href="https://drive.google.com/file/d/1DneRpWpaKrHKjAOgfIzzhWKNeOVj8eeP/view?usp=drive_link">
      <img
        src="/assets/my-cv.svg"
        alt="Download CV"
      >
    </NuxtLink>
  </div>
</template>

<style scoped></style>
