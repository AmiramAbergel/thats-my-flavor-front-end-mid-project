import {
    deleteObject,
    getDownloadURL as getStorageDownloadURL,
    ref,
    uploadBytes,
} from 'firebase/storage';
import { storage } from './firebase';

// Bucket URL from Storage in Firebase Console
const BUCKET_URL = '';
