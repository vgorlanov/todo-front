export const state = () => ({
    tasks: [
        {id: 1, title: 'Название задачи', body: 'Описание задачи', done: false},
        {id: 2, title: 'Название задачи 2', body: 'Описание задачи 2', done: true}
    ]
})

export const mutations = {
    setTasks(state, tasks) {
        state.tasks = tasks
    }
}


// export const actions = {
//
// }


export const getters = {
    tasks: s => s.tasks
}
