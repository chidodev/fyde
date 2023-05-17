import React from "react";
import { useContext } from "react";

const AppContext = React.createContext<any>({});

export const useApp = () => useContext(AppContext);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const [middleBar, setMiddleBar] = React.useState(true);

    return (
        <AppContext.Provider
            value={{ middleBar, setMiddleBar }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;