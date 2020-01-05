// import axios from 'axios';

const state = {
    todos: [
        {
            id: 1,
            title: 'todo one'
        },
        {
            id: 2,
            title: 'todo 2'
        },
        {
            id: 3,
            title: 'todo 3'
        },
        {
            id: 4,
            title: 'todo four'
        },
    ]
};

const getters={
    allTodos: (state) => state.todos
};

const actions={};

const mutations={};

export default {
    state,
    getters,
    actions,
    mutations
}
