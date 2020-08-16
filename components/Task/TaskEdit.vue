<template>
    <div>
        <v-card class="mb-1" outlined tile>
            <v-card-text>
                <v-text-field
                    dense
                    outlined
                    hide-details
                    autofocus
                    v-model="title"
                    @keyup.esc="$emit('cancel')"
                    @keyup.enter="save"
                    class="mb-1"
                ></v-text-field>
                <v-textarea
                    outlined
                    hide-details
                    auto-grow
                    v-model="body"
                    @keyup.esc="$emit('cancel')"
                    class="task-body"
                ></v-textarea>
                <v-row>
                    <v-col cols="8" class="pb-0">
                        <v-btn
                            tile
                            small
                            color="primary"
                            @click="save"
                        >
                            Сохранить
                        </v-btn>
                        <v-btn
                            tile
                            small
                            color="error"
                            text
                            @click="$emit('cancel')"
                        >
                            Отменить
                        </v-btn>
                    </v-col>
                    <v-col cols="4" class="pb-0">
                        <v-row>
                            <v-col align="right" class="py-0">
                                <v-checkbox
                                    label="Регулярная"
                                    hide-details
                                    dense
                                    class="task-edit-checkbox mt-0"
                                    :input-value="task.every"
                                    @change="every"
                                ></v-checkbox>
                            </v-col>
                            <v-col cols="5" align="right" class="py-0">
                                <task-picker @change="onChange" :current="task.date"></task-picker>
                            </v-col>
                        </v-row>

                    </v-col>
                </v-row>

            </v-card-text>
        </v-card>
    </div>
</template>

<script>

import TaskPicker from "./TaskPicker";

export default {
    name: "TaskEdit",
    components: {
        TaskPicker
    },
    data: () => ({
        title: null,
        body: null,
    }),
    props: {
        task: {
            type: Object,
            required: true
        }
    },
    mounted() {
        this.title = this.task.title
        this.body = this.task.body
    },
    methods: {
        complete(value) {
            this.$store.dispatch('tasks/update',
                Object.assign({}, this.task, {done: value})
            );
        },
        save() {
            this.$store.dispatch('tasks/update', {
                id: this.task.id,
                title: this.title,
                body: this.body
            });
            this.$emit('save')
        },
        onChange(value) {
            this.$store.dispatch('tasks/update',
                Object.assign({}, this.task, {date: value})
            )
        },
        every(value) {
            this.$store.dispatch('tasks/update',
                Object.assign({}, this.task, {every: value})
            );
        }
    }
}
</script>

<style scoped>

</style>
