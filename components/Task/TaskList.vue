<template>
    <div>
        <draggable>
            <task-index v-for="task in tasks" :key="task.id" :task="task" ></task-index>
        </draggable>
    </div>
</template>

<script>

import TaskIndex from "./TaskIndex"
import draggable from 'vuedraggable'

export default {
    name: "TaskList",
    components: {
        TaskIndex,
        draggable,
    },
    props: {
        tasks: {
            type: Array,
            required: true
        }
    },
}
</script>

<style scoped>

</style>
