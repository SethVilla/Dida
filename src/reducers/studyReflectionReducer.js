
export const studyReflectionReducer = (state, action) => {
    switch (action.type) {
        case 'change_learning_zone': {
            return {
                ...state,
                performance: [...state.performance, ...action.value],
            };
        }
        case 'change_time': {
            return {
                ...state,
                performance: action.value.actualTimeTake,
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
