import { createContext, useContext, useState } from "react";

export const UserDataContext = createContext(undefined);

export const UserDataProvider = ({ children }) => {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");

  return (
    <UserDataContext.Provider
      value={{ age, gender, weight, setAge, setGender, setWeight }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export const useUserData = () => useContext(UserDataContext);
