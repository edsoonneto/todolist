<template>
  <aside class="flex flex-col w-64 py-4 px-5">
    <UVerticalNavigation :links="links" />
  </aside>
</template>

<script setup lang="ts">
const links = [
  {
    label: "Home",
    icon: "i-heroicons-home",
    to: "/",
  },
];
</script>
