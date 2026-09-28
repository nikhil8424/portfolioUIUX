<template>
  <section id="research" class="common-padding py-20">
    <div class="flex flex-col">
      <h3
        id="research-title"
        v-html="researchTitle"
        class="heading-1 text-start leading-none font-bold uppercase"
      ></h3>

      <div
        id="research-text"
        class="md:column-gap text-flax-smoke-300 mt-[5%] grid grid-cols-12 justify-end opacity-0 lg:grid"
      >
        <p
          class="heading-6 text-flax-smoke-300/85 col-span-4 text-center text-nowrap lg:col-start-2"
        >
          ( RESEARCH )
        </p>
        <p
          class="heading-4 font-fancy col-span-8 w-full text-balance sm:font-semibold lg:col-span-7"
        >
          Academic research and experimental papers exploring the intersection of design, technology, and user experience.
        </p>
      </div>
    </div>

    <div class="mt-16">
      <div class="border-flax-smoke-300 rounded-lg border p-8 bg-[#0B0B0A]">
        <div class="mb-4">
          <span class="heading-6 text-flax-smoke-400 uppercase">06 — Research Paper</span>
        </div>
        <h4 class="heading-3 font-bold uppercase mb-3">Experimental Research Paper</h4>
        <p class="heading-6 text-flax-smoke-300 mb-6">
          Pre-publication version available on Zenodo, ranked on OpenAIRE.
        </p>
        <div class="flex gap-4">
          <a
            href="https://zenodo.org/records/21543953"
            target="_blank"
            rel="noopener noreferrer"
            class="border-flax-smoke-300 hover:bg-flax-smoke-300 hover:text-flax-smoke-900 rounded-full border px-4 py-2 transition-[background-color,color] duration-500 ease-in-out"
          >
            VIEW ON ZENODO →
          </a>
          <a
            href="https://explore.openaire.eu/search/result?pid=10.5281%2Fzenodo.21543953"
            target="_blank"
            rel="noopener noreferrer"
            class="border-flax-smoke-300 hover:bg-flax-smoke-300 hover:text-flax-smoke-900 rounded-full border px-4 py-2 transition-[background-color,color] duration-500 ease-in-out"
          >
            VIEW ON OPENAIRE →
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { animateSplitText } from '@/animations';
  import { textSplitterIntoChar } from '@/functions';
  import { onBeforeMount, onMounted, ref } from 'vue';

  const researchTitle = ref('Research /');

  onBeforeMount(() => {
    researchTitle.value = textSplitterIntoChar('Research /', true);
  });

  onMounted(() => {
    animateSplitText(
      '#research-title .letters',
      '#research-text',
      0.7,
      0.01,
      0,
    );
  });
</script>
