<template>
  <div class="flex flex-col gap-4 w-screen">
    <div
      class="flex bg-white rounded-full p-2 min-w-60 max-w-80 items-center justify-between"
    >
      <UInput
        v-model="taskListName"
        variant="none"
        :placeholder="$t('input.newTaskList')"
        @keyup.enter="onAddingTaskList"
      />
      <UButton
        icon="i-heroicons-plus-solid"
        size="sm"
        :ui="{ rounded: 'rounded-full' }"
        color="primary"
        variant="solid"
        label="Add"
        @click.prevent="onAddingTaskList"
      />
    </div>
    <div class="flex flex-wrap gap-4">
      <template v-for="item in list">
        <OrganismsTaskList :task-list="item" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TaskList } from "~/types";

const taskListName = ref("");

const list = reactive<TaskList[]>([
  {
    id: Math.random().toString(),
    title: "My Task List",
    tasks: [],
  },
]);

const onAddingTaskList = () => {
  if (!taskListName.value.trim()) return;

  list.push({
    id: Math.random().toString(),
    title: taskListName.value,
    tasks: [],
  });

  taskListName.value = "";
};
</script>
