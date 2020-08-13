<template>
    <v-row>
        <v-col cols="10">
            <v-text-field
                label="Добавить задачу"
                outlined
                dense
                hide-details
                @keyup.enter="add"
            ></v-text-field>
        </v-col>
        <v-col>
            <task-picker @change="change"></task-picker>
        </v-col>
    </v-row>
</template>

<script>
import TaskPicker from "./TaskPicker";
export default {
    name: "TaskAdd",
    components: {
        TaskPicker
    },
    data: () => ({
       date: new Date().toISOString().substr(0, 10)
    }),
    props: {
        project: {
            default: null
        }
    },
    methods: {
        add(e) {
            this.$store.dispatch('tasks/save', {
                title: e.target.value,
                date: this.date,
                project_id: this.project
            });
            e.target.value = '';
            this.$emit('added')
        },
        change(value) {
            this.date = value
        }
    }
}
</script>

<style scoped>

</style>
