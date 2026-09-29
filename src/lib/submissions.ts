import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp, type Timestamp } from 'firebase/firestore';
import { db, firebaseEnabled } from './firebase';

export type SubmissionSource = 'home' | 'contact';

export interface RequestFormValues {
  width: string;
  height: string;
  category: string;
  attachment: string;
  border: string;
  neededBy: string;
  quantity: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  referral: string;
  artworkFileName: string;
}

export interface FormSubmission extends RequestFormValues {
  id: string;
  source: SubmissionSource;
  createdAt: Timestamp | null;
}

export type ServiceRequestType = 'digitizing' | 'vector';

export interface ServiceRequestValues {
  requestType: ServiceRequestType;
  width: string;
  height: string;
  formats: string[];
  name: string;
  email: string;
  contact: string;
  message: string;
}

export interface ServiceSubmission extends ServiceRequestValues {
  id: string;
  createdAt: Timestamp | null;
}

const COLLECTION = 'formSubmissions';
const SERVICE_COLLECTION = 'serviceRequests';

const NOT_CONFIGURED_MESSAGE =
  'Firebase isn’t configured yet. Add your project’s VITE_FIREBASE_* values to .env (see .env.example).';

export async function submitFormRequest(source: SubmissionSource, values: RequestFormValues) {
  if (!db) {
    throw new Error(NOT_CONFIGURED_MESSAGE);
  }
  await addDoc(collection(db, COLLECTION), {
    ...values,
    source,
    createdAt: serverTimestamp(),
  });
}

export function subscribeToSubmissions(callback: (submissions: FormSubmission[]) => void, onError: (error: Error) => void) {
  if (!db) {
    onError(new Error(NOT_CONFIGURED_MESSAGE));
    return () => {};
  }
  const submissionsQuery = query(collection(db, COLLECTION), orderBy('createdAt', 'desc'));
  return onSnapshot(
    submissionsQuery,
    (snapshot) => {
      callback(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<FormSubmission, 'id'>),
        })),
      );
    },
    onError,
  );
}

export async function submitServiceRequest(values: ServiceRequestValues) {
  if (!db) {
    throw new Error(NOT_CONFIGURED_MESSAGE);
  }
  await addDoc(collection(db, SERVICE_COLLECTION), {
    ...values,
    createdAt: serverTimestamp(),
  });
}

export function subscribeToServiceRequests(
  callback: (submissions: ServiceSubmission[]) => void,
  onError: (error: Error) => void,
) {
  if (!db) {
    onError(new Error(NOT_CONFIGURED_MESSAGE));
    return () => {};
  }
  const submissionsQuery = query(collection(db, SERVICE_COLLECTION), orderBy('createdAt', 'desc'));
  return onSnapshot(
    submissionsQuery,
    (snapshot) => {
      callback(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<ServiceSubmission, 'id'>),
        })),
      );
    },
    onError,
  );
}

export { firebaseEnabled };
