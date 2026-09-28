<template>
  <section id="process" class="common-padding py-20">
    <div class="flex flex-col">
      <h3
        id="process-title"
        v-html="processTitle"
        class="heading-1 text-start leading-none font-bold uppercase"
      ></h3>

      <div
        id="process-text"
        class="md:column-gap text-flax-smoke-300 mt-[5%] grid grid-cols-12 justify-end opacity-0 lg:grid"
      >
        <p
          class="heading-6 text-flax-smoke-300/85 col-span-4 text-center text-nowrap lg:col-start-2"
        >
          ( MY PROCESS )
        </p>
        <p
          class="heading-4 font-fancy col-span-8 w-full text-balance sm:font-semibold lg:col-span-7"
        >
          A systematic approach to creating meaningful digital experiences.
        </p>
      </div>
    </div>

    <div class="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="(step, index) in processSteps"
        :key="index"
        class="process-step"
      >
        <div class="mb-4">
          <span class="heading-2 font-title! font-bold text-flax-smoke-400">
            {{ String(index + 1).padStart(2, '0') }}
          </span>
        </div>
        <h4 class="heading-4 font-bold uppercase mb-3">{{ step.title }}</h4>
        <p class="heading-6 text-flax-smoke-300">{{ step.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { animateSplitText } from '@/animations';
  import { textSplitterIntoChar } from '@/functions';
  import { onBeforeMount, onMounted, ref } from 'vue';

  const processTitle = ref('My Process /');

  const processSteps = [
    {
      title: 'RESEARCH',
      description: 'Understand the user, context, goals, and constraints.',
    },
    {
      title: 'DEFINE',
      description: 'Identify the core problem and structure the experience.',
    },
    {
      title: 'EXPLORE',
      description: 'Generate and compare possible solutions.',
    },
    {
      title: 'DESIGN',
      description: 'Turn ideas into wireframes, interfaces, and interactions.',
    },
    {
      title: 'TEST',
      description: 'Evaluate the experience and identify friction.',
    },
    {
      title: 'ITERATE',
      description: 'Refine the solution based on what was learned.',
    },
  ];

  onBeforeMount(() => {
    processTitle.value = textSplitterIntoChar('My Process /', true);
  });

  onMounted(() => {
    animateSplitText(
      '#process-title .letters',
      '#process-text',
      0.7,
      0.01,
      0,
    );
  });
</script>
