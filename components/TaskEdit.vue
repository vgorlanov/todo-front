<template>
    <div>
        <v-text-field
            dense
            outlined
            hide-details
            autofocus
            v-model="title"
            @keyup.esc="$emit('cancel')"
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
        <v-btn
            block
            tile
            small
            color="primary"
            @click="save"
        >
            Сохранить
        </v-btn>
    </div>
</template>

<script>
export default {
    name: "TaskEdit",
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
        save() {
            this.$store.dispatch('tasks/update', {
                id: this.task.id,
                title: this.title,
                body: this.body
            });
            this.$emit('save')
        }
    }
}
</script>

<style scoped>
    .task-body {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }
</style>
