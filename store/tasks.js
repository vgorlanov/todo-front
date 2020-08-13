export const state = () => ({
    tasks: []
})

export const mutations = {
    setTasks(state, tasks) {
        state.tasks = tasks
    },

    setTask(state, task) {
        const index = state.tasks.findIndex(elem => elem.id === task.id)

        if(index !== -1){
            state.tasks.splice(index, 1, task)
        } else {
            state.tasks.unshift(task)
        }
    },

    deleteTask(state, task) {
        const index = state.tasks.findIndex(elem => elem.id === task.id)

        if(index !== -1) {
            state.tasks.splice(index, 1)
        }
    }
}

export const actions = {
    async fetch({commit}) {
        const tasks = await this.$axios.$get('tasks')
        commit('setTasks', tasks)
    },

    async update({commit}, payload) {
        const task = await this.$axios.$put('tasks/' + payload.id, payload)
        commit('setTask', task)
    },

    async save({commit}, payload) {
        const task = await this.$axios.$post('tasks', payload)
        commit('setTask', task)
    },

    async delete({commit}, payload) {
        const result = await this.$axios.$delete('tasks/' + payload.id)

        if(result) {
            commit('deleteTask', payload)
        }
    }
}

export const getters = {
    tasks: s => s.tasks,
}
