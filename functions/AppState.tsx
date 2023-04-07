import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  FC,
} from "react";

type AppContextType = {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

export const AppContext = createContext<AppContextType>({
  searchTerm: "",
  setSearchTerm: () => {},
});

export const useAppContext = () => useContext(AppContext);

export const AppStateProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <AppContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  );
};
