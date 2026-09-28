<template>
  <section class="common-padding py-20">
    <div class="flex flex-col">
      <h3
        id="writing-title"
        v-html="writingTitle"
        class="heading-1 text-start leading-none font-bold uppercase"
      ></h3>

      <div
        id="writing-text"
        class="md:column-gap text-flax-smoke-300 mt-[5%] grid grid-cols-12 justify-end opacity-0 lg:grid"
      >
        <p
          class="heading-6 text-flax-smoke-300/85 col-span-4 text-center text-nowrap lg:col-start-2"
        >
          ( THINKING / WRITING )
        </p>
        <p
          class="heading-4 font-fancy col-span-8 w-full text-balance sm:font-semibold lg:col-span-7"
        >
          Thoughts on design, product thinking, and the intersection of creativity and technology.
        </p>
      </div>
    </div>

    <div class="mt-16">
      <div class="flex justify-center">
        <a
          href="https://medium.com/@guptanikhil8424"
          target="_blank"
          rel="noopener noreferrer"
          class="border-flax-smoke-300 hover:bg-flax-smoke-300 hover:text-flax-smoke-900 rounded-full border px-4 py-2 transition-[background-color,color] duration-500 ease-in-out"
        >
          READ ON MEDIUM →
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { animateSplitText } from '@/animations';
  import { textSplitterIntoChar } from '@/functions';
  import { onBeforeMount, onMounted, ref } from 'vue';

  const writingTitle = ref('Thinking / Writing /');

  onBeforeMount(() => {
    writingTitle.value = textSplitterIntoChar('Thinking / Writing /', true);
  });

  onMounted(() => {
    animateSplitText(
      '#writing-title .letters',
      '#writing-text',
      0.7,
      0.01,
      0,
    );
  });
</script>
