<template>
    <v-text-field
        dense
        outlined
        hide-details
        autofocus
        class="mb-1"
        @keyup.enter="save"
        v-model="title"
    ></v-text-field>
</template>

<script>
export default {
    name: "ProjectEdit",
    data: () => ({
        title: null
    }),
    props: {
        project: {
            type: Object,
            required: true
        }
    },
    mounted() {
        this.title = this.project.title
    },
    methods: {
        save(){
            this.$store.dispatch('projects/update', {
                id: this.project.id,
                title: this.title,
            })

            this.$emit('updated')
        }
    }
}
</script>

<style scoped>

</style>
