
export const studyReflectionReducer = (state, action) => {
    switch (action.type) {
        case 'change_learning_zone': {
            console.log(action.value, "action")
            return {
                ...state,
                performance: {
                    actualTimeTake: 0,
                    learningZone : action.value
                },
            };
        }
        case 'change_time': {
            return {
                ...state,
                performance: {
                    actualTimeTake: action.value,
                    learningZone : state.performance.learningZone
                },
            };
        }
        case 'change_completed': {
            return {
                ...state,
                completed: action.value,
            };
        }
        default: {
            throw new Error(`no matching action${action.type}`);
        }
    }
};
