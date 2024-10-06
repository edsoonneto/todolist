<template>
  <div
    class="bg-white flex flex-col gap-4 p-4 shadow-md border border-gray-200 border-solid rounded-xl min-h-60 w-80"
  >
    <div class="flex items-center justify-start">
      <h3 class="text-xl">{{ taskList.title }}</h3>
    </div>
    <UButton
      :padded="false"
      color="primary"
      variant="link"
      @click="onCreting"
      icon="i-heroicons-plus-circle-16-solid"
    >
      {{ $t("button.newTask") }}</UButton
    >
    <UInput
      v-if="isCreating"
      v-model="titleTask"
      variant="none"
      placeholder="Title"
      @blur="onAddingTask"
      @keyup.enter="onAddingTask"
    />
    <div class="flex flex-col gap-2">
      <template v-for="task in tasks">
        <UCheckbox :model-value="task.isDone" @change="onTaskDone(task)">
          <template #label>
            <span :class="{ 'line-through': task.isDone }">{{
              task.title
            }}</span>
          </template>
        </UCheckbox>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import type { Task, TaskList } from "~/types";

const props = defineProps({
  taskList: {
    type: Object as PropType<TaskList>,
    required: true,
  },
});

const titleTask = ref("");
const isCreating = ref(false);
const tasks = ref<Task[]>(props.taskList.tasks);

const onCreting = () => {
  isCreating.value = !isCreating.value;
};

const onAddingTask = () => {
  isCreating.value = false;

  if (titleTask.value.trim() === "") return;

  tasks.value.push({
    id: Math.random().toString(),
    title: titleTask.value,
    isDone: false,
  });

  titleTask.value = "";
};

const onTaskDone = (task: { title: string; isDone: boolean }) => {
  task.isDone = !task.isDone;
};
</script>
