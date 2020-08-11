<template>
    <v-row>
        <v-col cols="10">
            <v-text-field
                label="Добавить задачу"
                outlined
                dense
                hide-details
            ></v-text-field>
        </v-col>
        <v-col>
            <task-picker></task-picker>
        </v-col>
    </v-row>
</template>

<script>
import TaskPicker from "./TaskPicker";
export default {
    name: "TaskAdd",
    components: {
        TaskPicker
    }
}
</script>

<style scoped>

</style>
