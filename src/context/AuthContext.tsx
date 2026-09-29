import { useEffect, useState, type ReactNode } from 'react';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, type User } from 'firebase/auth';
import { auth, firebaseEnabled } from '../lib/firebase';
import { AuthContext } from './auth-context';

const NOT_CONFIGURED_MESSAGE =
  'Firebase isn’t configured yet. Add your project’s VITE_FIREBASE_* values to .env (see .env.example).';

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(firebaseEnabled);

  useEffect(() => {
    if (!auth) return;
    return onAuthStateChanged(auth, (nextUser) => {
      setUser(nextUser);
      setLoading(false);
    });
  }, []);

  const signIn = async (email: string, password: string) => {
    if (!auth) throw new Error(NOT_CONFIGURED_MESSAGE);
    await signInWithEmailAndPassword(auth, email, password);
  };

  const signOutAdmin = async () => {
    if (!auth) return;
    await signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOutAdmin }}>{children}</AuthContext.Provider>
  );
}
