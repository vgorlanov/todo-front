<template>
    <div>
        <task-edit
            v-if="editing"
            :task="task"
            @save="editing = false"
            @cancel="editing = false"
        ></task-edit>
        <task
            v-else
            :task="task"
            @edit="editing = true"
        ></task>

    </div>
</template>

<script>

import TaskEdit from "./TaskEdit";
import Task from "./Task";

export default {
    name: "TaskIndex",
    components: {
        TaskEdit,
        Task
    },
    data: () => ({
        editing: false,
    }),
    props: {
        task: {
            type: Object,
            require: true
        }
    },
}
</script>

<style scoped>
.task-title, .task-remove, .task-edit-title {
    font-size: 20px;
    color: black;
    cursor: pointer;
}

.task-checkbox {
    padding-top: 8px;
    padding-left: 12px;
}

.task-checkbox .v-input--checkbox {
    margin-top: 0;
}

.task-edit {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 3px;
}

.task-done {
    color: #7f828b;
}


</style>
