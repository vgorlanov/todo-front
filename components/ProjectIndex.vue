<template>
    <div>
        <h3 class="mb-2 mt-1">{{ project.title }}</h3>

        <task-add
            v-if="add"
            
        ></task-add>
        <span
            v-else
            @click="add = true"
            class="project-task-add"
        >
            + Добавить задачу
        </span>

        <task-list :tasks="tasks"></task-list>
    </div>
</template>

<script>

import TaskList from "./TaskList";
import TaskAdd from "./TaskAdd";

export default {
    name: "ProjectIndex",
    components: {
        TaskList,
        TaskAdd
    },
    data: () => ({
        add: false
    }),
    props: {
        project: {
            type: Object,
            required: true
        }
    },
    computed: {
        tasks() {
            const tasks = this.$store.getters['tasks/tasks']
            return tasks.filter(item => item.project_id === this.project.id)
        }
    }
}
</script>

<style scoped>
    .project-task-add {
        cursor: pointer;
    }
</style>
