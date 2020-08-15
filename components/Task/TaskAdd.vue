<template>
    <v-row>
        <v-col :class="{'col-10' : !hideDate, 'col-12' : hideDate}">
            <v-text-field
                label="Добавить задачу"
                outlined
                dense
                hide-details
                @keyup.enter="add"
            ></v-text-field>
        </v-col>
        <v-col v-if="!hideDate">
            <task-picker :current="date" @change="change"></task-picker>
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
       date: null
    }),
    props: {
        project: {
            default: null
        },
        hideDate: {
            type: Boolean,
            default: false
        }
    },
    created() {
        this.date = this.hideDate ? null : new Date().toISOString().substr(0, 10)
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
