<template>
  <div class="flex flex-col flex-1 overflow-hidden">
    <header
      class="flex w-full h-16 bg-white border-b border-b-gray-100"
    ></header>
    <div class="flex flex-1 overflow-hidden w-full">
      <OrganismsSidebar />
      <main class="flex flex-col flex-1 overflow-y-auto px-8 py-4">
        <slot />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { OrganismsSidebar } from '#build/components';

</script>

<style></style>
