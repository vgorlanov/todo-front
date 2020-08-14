export const state = () => ({
    projects: []
})


export const mutations = {
    setProjects(state, projects) {
        state.projects = projects
    },

    setProject(state, project) {
        const index = state.projects.findIndex(elem => elem.id === project.id)

        if(index !== -1){
            state.projects.splice(index, 1, project)
        } else {
            state.projects.unshift(project)
        }
    },

    deleteProject(state, project) {
        const index = state.projects.findIndex(elem => elem.id === project.id)

        if(index !== -1) {
            state.projects.splice(index, 1)
        }
    }
}


export const actions = {
    async fetch({commit}) {
        const projects = await this.$axios.$get('projects')
        commit('setProjects', projects)
    },

    async update({commit}, payload) {
        const project = await this.$axios.$put('projects/' + payload.id, payload)
        commit('setProject', project)
    },

    async save({commit}, payload) {
        const project = await this.$axios.$post('projects', payload)
        commit('setProject', project)
    },

    async delete({commit}, payload) {
        const result = await this.$axios.$delete('projects/' + payload.id)

        if(result) {
            commit('deleteProject', payload)
        }
    }
}


export const getters = {
    projects: s => s.projects,
}
