// Old implementation written in 2020-2021 ...

'use strict'

const ACTION_PARAMETER_NOT_OBJECT_ERROR = 'Actions must be plain objects. Use custom middleware for async actions.'
const ACTION_PARAMETER_TYPE_FIELD_ERROR = 'Actions may not have an undefined "type" property. Have you misspelled a constant?'
const LISTENER_ERROR = 'Expected the listener to be a function.'
const INITIAL_ACTION_TYPE = '@@redux/INITl.8.i.0.t'

const MyCustomRedux = {
    createStore: (reducer, initialState) => {
        let state = initialState
        const listeners = []

        const store = {
            dispatch: function(action) {
                if (action === undefined || typeof action !== 'object') {
                    throw new Error(ACTION_PARAMETER_NOT_OBJECT_ERROR)
                }
                
                if (typeof action === 'object' && action.type === undefined) {
                    throw new Error(ACTION_PARAMETER_TYPE_FIELD_ERROR)
                }

                state = reducer(state, action)

                for (let i = 0; i < listeners.length; i++) {
                    listeners[i]()
                }
            },
            subscribe: (listener) => {
                if (typeof listener !== 'function') {
                    throw new Error(LISTENER_ERROR)
                }

                listeners.push(listener)
            },
            getState: () => state
        }

        // Call a dispatch initially
        store.dispatch({type: INITIAL_ACTION_TYPE})

        return store
    },
    combineReducers: (reducersObject) => {
        console.log('COMBINE_REDUCERS')
    }
}
