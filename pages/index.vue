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
                    <v-card-subtitle>
                        <task-add :hide-date="true"></task-add>
                    </v-card-subtitle>
                    <v-card-text>
                        <task-list :tasks="free"></task-list>
                    </v-card-text>
                </v-card>
                <!--END NEW-->
            </v-col>

        </v-row>
    </v-layout>
</template>

<script>

import TaskPicker from "../components/Task/TaskPicker";
import TaskAdd from "../components/Task/TaskAdd";
import TaskList from "../components/Task/TaskList";
import ProjectList from "../components/Project/ProjectList";
import ProjectAdd from "../components/Project/ProjectAdd";

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
            return this.$store.getters['tasks/date']
        },

        free() {
            return this.$store.getters['tasks/free']
        },

        projects() {
            return this.$store.getters['projects/projects']
        }
    }
}
</script>

<style scoped>

</style>
