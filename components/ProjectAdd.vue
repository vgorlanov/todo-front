<template>
    <v-text-field
        label="Добавить проект"
        outlined
        dense
        class="mt-3"
        v-model="title"
        @keyup.enter="save"
        @keyup.esc="cancel"
    ></v-text-field>
</template>

<script>
export default {
    name: "ProjectAdd",
    data: () => ({
        title: null
    }),
    methods: {
        save() {
            this.$store.dispatch('projects/save', {title: this.title})
            this.title = null
        },
        cancel() {
            this.title = null
        }
    }
}
</script>

<style scoped>

</style>
