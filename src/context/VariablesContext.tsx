import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import { useAuth } from '@/context/AuthContext';
import { getUserVariables, saveUserVariables } from '@/store/variableStorage';
import type { Variables } from '@/types/variables';

type VariablesContextType = {
  variables: Variables;
  setVariables: (vars: Variables) => void;
};

const VariablesContext = createContext<VariablesContextType | null>(null);

export function VariablesProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth(); // ✅ берём uid прямо из AuthContext
  const [variables, setVariablesState] = useState<Variables>({});

  // Подтягиваем переменные при логине
  useEffect(() => {
    if (user?.uid) {
      const vars = getUserVariables(user.uid);
      setVariablesState(vars);
    } else {
      setVariablesState({}); // если нет пользователя, очищаем
    }
  }, [user]);

  const setVariables = (vars: Variables) => {
    setVariablesState(vars);
    if (user?.uid) {
      saveUserVariables(user.uid, vars); // сохраняем под uid конкретного пользователя
    }
  };

  return (
    <VariablesContext.Provider value={{ variables, setVariables }}>
      {children}
    </VariablesContext.Provider>
  );
}

// Хук для доступа к переменным
export function useVariables() {
  const ctx = useContext(VariablesContext);
  if (!ctx)
    throw new Error('useVariables must be used within VariablesProvider');
  return ctx;
}
