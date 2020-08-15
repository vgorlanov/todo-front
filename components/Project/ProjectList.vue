<template>
    <div>
        <project-index :project="project" v-for="project in projects" :key="project.id">
            {{ project.title }}
        </project-index>
    </div>
</template>

<script>

import ProjectIndex from "./ProjectIndex";


export default {
    name: "ProjectList",
    components: {
        ProjectIndex,
    },
    props: {
        projects: {
            type: Array,
            required: true
        }
    },
}
</script>

<style scoped>

</style>
