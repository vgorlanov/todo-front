<template>
    <v-list-item class="todo-item">
        <v-list-item-action>
            <v-checkbox @change="complete" v-model="done"></v-checkbox>
        </v-list-item-action>
        <v-list-item-content>
            <div class="task-title" :class="{'task-done': done}" @click="$emit('edit')">{{ task.title }}</div>
        </v-list-item-content>

        <task-picker :current="task.date" @change="onChange"></task-picker>
        <v-list-item-action>
            <span>x</span>
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
    data: () => ({
       done: false
    }),
    props: {
        task: {
            type: Object,
            required: true
        }
    },
    mounted() {
        this.done = this.task.done
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
        }
    }

}
</script>

<style scoped>
    .task-done {
        text-decoration-line: line-through;
        color: grey !important;
    }

    .task-title {
        cursor: pointer;
        color: black;
        font-size: 20px;
    }
</style>
