<template>
    <v-menu
        ref="menu"
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
    >
        <template v-slot:activator="{ on, attrs }">
            <v-btn
                readonly
                v-bind="attrs"
                v-on="on"
                small
                text
                color="primary"
            >
                {{ label }}
            </v-btn>
        </template>

        <v-date-picker
            no-title
            @change="change"
            :value="current"
        >
            <v-btn  text @click="today" color="green">Сегодня</v-btn>
            <v-btn  text @click="tomorrow" color="primary">Завтра</v-btn>
            <v-btn  text @click="free" color="error">Удалить</v-btn>
        </v-date-picker>
    </v-menu>
</template>

<script>
export default {
    name: "TaskPicker",
    data: () => ({
        menu: false,
    }),
    props: {
        current: null
    },
    methods: {
        change(date) {
            this.$refs.menu.save(date)
            this.$emit('change', date)
        },
        today() {
            let today = new Date().toISOString().substr(0, 10);
            this.change(today)
        },
        tomorrow() {
            let tomorrow = new Date();
            tomorrow.setDate(new Date().getDate() + 1);
            tomorrow = tomorrow.toISOString().substr(0, 10);
            this.change(tomorrow)
        },
        free() {
            this.change(null)
        }
    },
    computed: {
        label() {
            return this.current ? this.current : 'дата'
        }
    }
}
</script>

<style scoped>

</style>
