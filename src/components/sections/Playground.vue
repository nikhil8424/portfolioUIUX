<template>
  <section id="playground" class="common-padding py-20">
    <div class="flex flex-col">
      <h3
        id="playground-title"
        v-html="playgroundTitle"
        class="heading-1 text-start leading-none font-bold uppercase"
      ></h3>

      <div
        id="playground-text"
        class="md:column-gap text-flax-smoke-300 mt-[5%] grid grid-cols-12 justify-end opacity-0 lg:grid"
      >
        <p
          class="heading-6 text-flax-smoke-300/85 col-span-4 text-center text-nowrap lg:col-start-2"
        >
          ( PLAYGROUND )
        </p>
        <p
          class="heading-4 font-fancy col-span-8 w-full text-balance sm:font-semibold lg:col-span-7"
        >
          A space for smaller design experiments and explorations.
        </p>
      </div>
    </div>

    <div class="mt-16">
      <p class="heading-6 text-flax-smoke-400 text-center">
        Coming soon — UI explorations, interactions, typography experiments, and product concepts.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { animateSplitText } from '@/animations';
  import { textSplitterIntoChar } from '@/functions';
  import { onBeforeMount, onMounted, ref } from 'vue';

  const playgroundTitle = ref('Playground /');

  onBeforeMount(() => {
    playgroundTitle.value = textSplitterIntoChar('Playground /', true);
  });

  onMounted(() => {
    animateSplitText(
      '#playground-title .letters',
      '#playground-text',
      0.7,
      0.01,
      0,
    );
  });
</script>
