<template>
    <div>
        <project-edit
            v-if="edit"
            @updated="edit = false"
            :project="project"
        ></project-edit>
        <h3
            class="mb-2 project-title"
            v-else
            @click="edit = true"
        >
            {{ project.title }}
            <v-btn @click="remove" class="text-right" small text fab color="error">x</v-btn>
        </h3>

        <task-add
            v-if="add"
            @added="added"
            :project="project.id"
            :hide-date="true"
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

import TaskList from "../Task/TaskList";
import TaskAdd from "../Task/TaskAdd";
import ProjectEdit from "./ProjectEdit";

export default {
    name: "ProjectIndex",
    components: {
        TaskList,
        TaskAdd,
        ProjectEdit
    },
    data: () => ({
        add: false,
        edit: false,
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
    },
    methods: {
        added() {
            this.add = false
        },
        remove() {
            this.$store.dispatch('projects/delete', this.project);
            this.$store.commit('tasks/deleteByProject', this.project.id)
        }
    }
}
</script>

<style scoped>
    .project-task-add {
        cursor: pointer;
    }

    .project-delete {
        float: right;
    }

    .project-title {
        cursor: pointer;
    }
</style>
