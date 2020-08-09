<template>
  <v-menu
      ref="menu"
      :close-on-content-click="false"
      :return-value.sync="date"
      transition="scale-transition"
      offset-y
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
          readonly
          v-bind="attrs"
          v-on="on"
          x-small
          text
          color="primary"
      >{{ label }}</v-btn>
    </template>

    <v-date-picker
        no-title
        @change="select"
        v-model="date"
    ></v-date-picker>
  </v-menu>
</template>

<script>
export default {
  name: "Picker",
  data:() => ({
    date: null,
    menu: false,
  }),
  methods: {
    select (date) {
      this.$refs.menu.save(date)
    },
  },
  computed: {
    label() {
      return this.date !== null ? this.date : new Date().toISOString().substr(0, 10)
    }
  }
}
</script>

<style scoped>

</style>
