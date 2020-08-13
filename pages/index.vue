<template>
    <v-layout>

        <v-row>
            <v-col>
                <!--PROJECT-->
                <v-card outlined tile>
                    <v-card-title class="justify-center">Проекты</v-card-title>
                    <v-card-subtitle>
                        <project-add></project-add>
                    </v-card-subtitle>
                    <v-card-text>
                        <project-list :projects="projects"></project-list>
                    </v-card-text>
                </v-card>
                <!--END PROJECT-->
            </v-col>
            <v-col>

                <!--CURRENT-->
                <v-card outlined tile>
                    <v-card-title class="justify-center">Текущие</v-card-title>
                    <v-card-subtitle>
                        <task-add></task-add>
                    </v-card-subtitle>
                    <v-card-text>
                        <task-list :tasks="tasks"></task-list>
                    </v-card-text>
                </v-card>
                <!--END CURRENT-->

            </v-col>
            <v-col>
                <!--NEW-->
                <v-card outlined tile>
                    <v-card-title class="justify-center">Входящие</v-card-title>
                </v-card>
                <!--END NEW-->
            </v-col>

        </v-row>
    </v-layout>
</template>

<script>

import TaskPicker from "../components/TaskPicker";
import TaskAdd from "../components/TaskAdd";
import TaskList from "../components/TaskList";
import ProjectList from "../components/ProjectList";
import ProjectAdd from "../components/ProjectAdd";

export default {
    async fetch({store}) {
        if(store.getters['tasks/tasks'].length === 0) {
            await store.dispatch('tasks/fetch')
        }

        if(store.getters['projects/projects'].length === 0) {
            await store.dispatch('projects/fetch')
        }
    },
    components: {
        TaskPicker,
        TaskAdd,
        TaskList,
        ProjectList,
        ProjectAdd
    },
    computed: {
        tasks() {
            return this.$store.getters['tasks/tasks']
        },

        projects() {
            return this.$store.getters['projects/projects']
        }
    }
}
</script>

<style scoped>

</style>
