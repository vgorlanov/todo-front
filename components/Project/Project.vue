<template>
    <v-row>
        <v-col cols="1" md="1" sm="2" class="pr-0 project-control">
            <v-icon>drag_handle</v-icon>
            <span @click="$emit('fade')">
            <v-icon>keyboard_arrow_down</v-icon>
        </span>
        </v-col>
        <v-col cols="10" md="10" sm="9">
            <h2
                class="mb-2 project-title"
                @click="$emit('edit')"
            >
                {{ project.title }}
            </h2>
        </v-col>
        <v-col col="1" align="right" class="project-delete">
            <span @click="$emit('remove')">
                <v-icon>clear</v-icon>
            </span>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: "Project",
    props: {
        project: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
    .project-title {
        color: black;
    }

    .project-delete , .project-control{
        cursor: pointer;
    }
</style>
