<template>
  <section class="padding-x py-20">
    <div class="grid grid-cols-12 gap-8">
      <div class="col-span-12 md:col-span-8 md:col-start-3">
        <h2
          v-html="introText"
          class="heading-display leading-none font-bold uppercase"
        ></h2>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { textSplitterIntoChar } from '@/functions';
  import { onBeforeMount, ref } from 'vue';

  const introText = ref(
    'Good interfaces don\'t just look good. They make things easier to understand.',
  );

  onBeforeMount(() => {
    introText.value = textSplitterIntoChar(introText.value, true);
  });
</script>
