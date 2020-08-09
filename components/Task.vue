<template>
<!--    <v-row>-->
<!--        <v-col cols="1">-->
<!--            <v-checkbox-->
<!--                dense-->
<!--                hide-details-->
<!--                v-model="done"-->
<!--                class="mt-0 pt-0"-->
<!--            ></v-checkbox>-->
<!--        </v-col>-->
<!--        <v-col cols="9">-->
<!--            <div class="task-title" :class="{'task-done': done}" @click="$emit('edit')">{{ task.title }}</div>-->
<!--        </v-col>-->
<!--        <v-col align="right" cols="2">-->
<!--            <picker></picker>-->
<!--            <span class="task-remove">x</span>-->
<!--        </v-col>-->
<!--    </v-row>-->






    <v-list-item class="todo-item">
        <v-list-item-action>
            <v-checkbox v-model="done"></v-checkbox>
        </v-list-item-action>
        <v-list-item-content>
            <div class="task-title" :class="{'task-done': done}" @click="$emit('edit')">{{ task.title }}</div>
        </v-list-item-content>

        <picker></picker>
        <v-list-item-action>
            <span>x</span>
        </v-list-item-action>

    </v-list-item>



</template>

<script>

import Picker from "./Picker";

export default {
    name: "Task",
    components: {
        Picker
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

}
</script>

<style scoped>
    .task-done {
        text-decoration-line: line-through
    }

    .task-title {
        cursor: pointer;
        color: black;
        font-size: 20px;
    }
</style>
