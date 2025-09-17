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
  const { user } = useAuth();
  const [variables, setVariablesState] = useState<Variables>({});

  useEffect(() => {
    if (user?.uid) {
      const vars = getUserVariables(user.uid);
      setVariablesState(vars);
    } else {
      setVariablesState({});
    }
  }, [user]);

  const setVariables = (vars: Variables) => {
    setVariablesState(vars);
    if (user?.uid) {
      saveUserVariables(user.uid, vars);
    }
  };

  return (
    <VariablesContext.Provider value={{ variables, setVariables }}>
      {children}
    </VariablesContext.Provider>
  );
}

export function useVariables() {
  const ctx = useContext(VariablesContext);
  if (!ctx)
    throw new Error('useVariables must be used within VariablesProvider');
  return ctx;
}
