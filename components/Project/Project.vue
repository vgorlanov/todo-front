<template>
    <v-row>
        <v-col cols="1" class="pb-0">
            <span class="mr-2">=</span>
            <span @click="$emit('fade')">v</span>
        </v-col>
        <v-col cols="10" class="pb-0">
            <h3
                class="mb-2 project-title"
                @click="$emit('edit')"
            >
                {{ project.title }}
            </h3>
        </v-col>
        <v-col cols="1" class="pb-0">
            <v-btn @click="$emit('remove')" class="text-right" small text fab color="error">x</v-btn>
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

</style>
