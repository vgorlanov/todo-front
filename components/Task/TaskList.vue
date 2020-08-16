<template>
    <div>

        <task-index :key="task.id" :task="task" v-for="task in tasks"></task-index>
    </div>
</template>

<script>

import TaskIndex from "./TaskIndex";
import draggable from 'vuedraggable'

export default {
    name: "TaskList",
    components: {
        TaskIndex,
        draggable
    },
    props: {
        tasks: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>

</style>
