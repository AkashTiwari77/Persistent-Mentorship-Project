import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);
const ACCOUNTS_KEY = "medicare-accounts";
const SESSION_KEY = "medicare-session";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem(SESSION_KEY) || "null"));
  const [accounts, setAccounts] = useState(() => JSON.parse(localStorage.getItem(ACCOUNTS_KEY) || "[]"));
  useEffect(() => localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts)), [accounts]);

  const register = (details) => {
    const email = details.email.trim().toLowerCase();
    if (accounts.some((account) => account.email === email)) throw new Error("An account with this email already exists.");
    const account = { ...details, email, id: crypto.randomUUID() };
    setAccounts((current) => [...current, account]);
    const session = { id: account.id, name: `${account.firstName} ${account.lastName}`.trim(), role: account.role, email: account.email };
    localStorage.setItem(SESSION_KEY, JSON.stringify(session)); setUser(session);
  };

  const login = ({ email, password, role }) => {
    const account = accounts.find((item) => item.email === email.trim().toLowerCase() && item.password === password && item.role === role);
    if (!account) throw new Error("We could not find a matching account. Check your email, password, and role.");
    const session = { id: account.id, name: `${account.firstName} ${account.lastName}`.trim(), role: account.role, email: account.email };
    localStorage.setItem(SESSION_KEY, JSON.stringify(session)); setUser(session);
  };

  const logout = () => { localStorage.removeItem(SESSION_KEY); setUser(null); };
  return <AuthContext.Provider value={{ user, register, login, logout }}>{children}</AuthContext.Provider>;
}

export function useAuth() { return useContext(AuthContext); }
