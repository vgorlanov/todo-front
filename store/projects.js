export const state = () => ({
    projects: [
        {id: 1, title: 'Какой-то проект 1'},
        {id: 2, title: 'Какой-то проект 2'}
    ]
})

// export const mutations = {
//
// }


// export const actions = {
//
// }


export const getters = {
    projects: s => s.tasks
}
