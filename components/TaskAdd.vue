<template>
    <v-row>
        <v-col cols="10">
            <v-text-field
                label="Добавить задачу"
                outlined
                dense
                hide-details
            ></v-text-field>
        </v-col>
        <v-col>
            <picker></picker>
        </v-col>
    </v-row>
</template>

<script>
import Picker from "./Picker";
export default {
    name: "TaskAdd",
    components: {
        Picker
    }
}
</script>

<style scoped>

</style>
