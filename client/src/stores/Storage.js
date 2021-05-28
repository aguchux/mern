import { createContext } from 'react'
import { useStorageReducer } from 'react-storage-hooks'

const dataset = {}
const storage = new createContext(dataset)
const { Provider } = storage

const StorageProvider = ({ children }) => {
    const [state, dispatch, wrirteError] = useStorageReducer(localStorage, "dataset", (state, action) => {
        const { type,payload } = action
        switch (type) {
            case "change_name":
                return { ...state,name:payload };
            case "1":
                return { ...state };
            default:
                return { ...state };
        }

    }, dataset)

    return <Provider value={{state,dispatch,wrirteError}}>{children}</Provider>
}
export {storage,StorageProvider}