<template>
  <section class="common-padding py-20">
    <div class="flex flex-col">
      <h3
        id="design-tech-title"
        v-html="designTechTitle"
        class="heading-1 text-start leading-none font-bold uppercase"
      ></h3>

      <div
        id="design-tech-text"
        class="md:column-gap text-flax-smoke-300 mt-[5%] grid grid-cols-12 justify-end opacity-0 lg:grid"
      >
        <p
          class="heading-6 text-flax-smoke-300/85 col-span-4 text-center text-nowrap lg:col-start-2"
        >
          ( DESIGN × TECHNOLOGY )
        </p>
        <p
          class="heading-4 font-fancy col-span-8 w-full text-balance sm:font-semibold lg:col-span-7"
        >
          I sit at the intersection of design and technology — thinking about both the experience users see and the systems that make that experience possible.
        </p>
      </div>
    </div>

    <div class="mt-16 flex flex-col items-center">
      <div class="max-w-2xl w-full space-y-8">
        <div
          v-for="(item, index) in designTechFlow"
          :key="index"
          class="text-center"
        >
          <h4 class="heading-2 font-bold uppercase">{{ item }}</h4>
          <div
            v-if="index < designTechFlow.length - 1"
            class="flex justify-center py-4"
          >
            <svg
              class="w-8 h-8 text-flax-smoke-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { animateSplitText } from '@/animations';
  import { textSplitterIntoChar } from '@/functions';
  import { onBeforeMount, onMounted, ref } from 'vue';

  const designTechTitle = ref('Design × Technology /');

  const designTechFlow = [
    'USER',
    'EXPERIENCE',
    'INTERACTION',
    'PRODUCT',
    'TECHNOLOGY',
  ];

  onBeforeMount(() => {
    designTechTitle.value = textSplitterIntoChar('Design × Technology /', true);
  });

  onMounted(() => {
    animateSplitText(
      '#design-tech-title .letters',
      '#design-tech-text',
      0.7,
      0.01,
      0,
    );
  });
</script>
