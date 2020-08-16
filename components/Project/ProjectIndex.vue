<template>
    <div>
        <project-edit
            v-if="edit"
            @updated="edit = false"
            :project="project"
        ></project-edit>
        <div v-else>
            <project
                @remove="remove"
                @edit="edit = true"
                @fade="show = !show"
                :project="project"
            ></project>
        </div>

        <div v-show="show">
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

    </div>
</template>

<script>

import TaskList from "../Task/TaskList";
import TaskAdd from "../Task/TaskAdd";
import ProjectEdit from "./ProjectEdit";
import Project from "./Project";

export default {
    name: "ProjectIndex",
    components: {
        TaskList,
        TaskAdd,
        ProjectEdit,
        Project
    },
    data: () => ({
        add: false,
        edit: false,
        show: true,
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
