<template>
    <v-list-item class="todo-item pl-0 pr-0">
        <v-list-item-action class="mr-3 task-drag">
            <v-icon>drag_handle</v-icon>
        </v-list-item-action>
        <v-list-item-action  class="mr-3">
            <v-checkbox  @change="complete" :input-value="task.done"></v-checkbox>
        </v-list-item-action>
        <v-list-item-content>
            <div class="task-title" :class="{'task-done': task.done}" @click="$emit('edit')">{{ task.title }}</div>

<!--            {{ task.orders }}-->

        </v-list-item-content>
        <task-picker :current="task.date" @change="onChange"></task-picker>
        <v-list-item-action>
            <span class="task-delete" @click="remove">
                <v-icon>clear</v-icon>
            </span>
        </v-list-item-action>
    </v-list-item>
</template>

<script>

import TaskPicker from "./TaskPicker";

export default {
    name: "Task",
    components: {
        TaskPicker
    },
    props: {
        task: {
            type: Object,
            required: true
        }
    },
    methods: {
        complete(value) {
            this.$store.dispatch('tasks/update',
                Object.assign({}, this.task, {done: value})
            );
        },

        onChange(value) {
            this.$store.dispatch('tasks/update',
                Object.assign({}, this.task, {date: value})
            )
        },

        remove() {
            this.$store.dispatch('tasks/delete', this.task)
        }
    },
}
</script>

<style scoped>
    .task-done {
        text-decoration-line: line-through;
        color: grey !important;
    }

    .task-title, .task-delete {
        cursor: pointer;
        color: black;
        font-size: 20px;
    }

    .task-drag {
        cursor: move;
    }

</style>
