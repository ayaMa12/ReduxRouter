import { createContext, useContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const ContextData = createContext([]);

export function ContextProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved
      ? JSON.parse(saved)
      : [
          {
            id: uuidv4(),
            name: "First Step",
            Explaine: "البداية دايمًا صعبة، لكن كل خطوة صغيرة بتقربك لهدفك",
          },
          {
            id: uuidv4(),
            name: "Keep Learning",
            Explaine: "البرمجة مش حفظ، دي ممارسة وتجربة مستمرة كل يوم",
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <ContextData.Provider value={{ user, setUser }}>
      {children}
    </ContextData.Provider>
  );
}

export const useUser = () => useContext(ContextData);