import {createContext, useState} from "react";


export const UserContext = createContext();

// eslint-disable-next-line react/prop-types
export const UserProvider = ({children}) => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        id: 0
    });
    const addUser = (newUser) => {
        setUser(newUser);
    }
    const eliminateUser = () => {
        setUser({
            name: "",
            email: ""
        });
    }
    return (
        <UserContext.Provider value={{user,addUser,eliminateUser}}>
            {children}
        </UserContext.Provider>
    );
}