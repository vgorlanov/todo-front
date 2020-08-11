export const state = () => ({
    tasks: []
})

export const mutations = {
    setTasks(state, tasks) {
        state.tasks = tasks
    },

    setTask(state, task) {
        const index = state.tasks.findIndex(elem => elem.id === task.id)
        state.tasks.splice(index, 1, task);
    }
}

export const actions = {
    async fetch({commit}) {
        const tasks = await this.$axios.$get('http://localhost:8181/api/tasks')
        commit('setTasks', tasks)
    },

    async update({commit}, payload) {
        const task = await this.$axios.$put('http://localhost:8181/api/tasks/' + payload.id, payload)
        commit('setTask', task)
    }
}

export const getters = {
    tasks: s => s.tasks,
    projects: s => {
        console.log(s.tasks)
    }
}
