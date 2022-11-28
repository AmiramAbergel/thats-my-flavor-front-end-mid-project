import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    onSnapshot,
    orderBy,
    query,
    setDoc,
    where,
} from 'firebase/firestore';
import { db } from './firebase';

// Name of flavors collection in Firestore
const FLAVORS_COLLECTION = 'flavors';
const FAVORITES_COLLECTION = 'favorites';

/* 
 Returns list of all flavors for given @uid.
 Each flavor contains:
 - address: address at which purchase was made
 - amount: amount of expense
 - date: date of purchase
 - id: receipt ID
 - imageUrl: download URL of the stored receipt image
 - imageBucket: bucket at which receipt image is stored in Firebase Storage
 - items: items purchased
 - locationName: name of location
 - uid: user id of which the receipt is for
*/

export async function getFlavors(setFlavors, setIsLoadingFlavors) {
    const flavorsQuery = query(
        collection(db, FLAVORS_COLLECTION),
        orderBy('amount', 'desc')
    );

    const unsubscribe = onSnapshot(flavorsQuery, async (snapshot) => {
        let allFlavors = [];
        for (const documentSnapshot of snapshot.docs) {
            const flavor = documentSnapshot.data();
            allFlavors.push({
                ...flavor,
                id: documentSnapshot.id,
            });
        }
        setFlavors(allFlavors);
        setIsLoadingFlavors(false);
    });
    return unsubscribe;
}

/* 
 Returns list of all flavors for given @uid.
 Each flavor contains:
 - address: address at which purchase was made
 - amount: amount of expense
 - date: date of purchase
 - id: receipt ID
 - imageUrl: download URL of the stored receipt image
 - imageBucket: bucket at which receipt image is stored in Firebase Storage
 - items: items purchased
 - locationName: name of location
 - uid: user id of which the receipt is for
*/

export async function getFavorites(uid, setFavorites, setIsLoadingFavorites) {
    const favoritesQuery = query(
        collection(db, FAVORITES_COLLECTION),
        where('uid', '==', uid),
        orderBy('amount', 'desc')
    );

    const unsubscribe = onSnapshot(favoritesQuery, async (snapshot) => {
        let allFavorites = [];
        for (const documentSnapshot of snapshot.docs) {
            const favorite = documentSnapshot.data();
            allFavorites.push({
                ...favorite,
                id: documentSnapshot.id,
            });
        }
        setFavorites(allFavorites);
        setIsLoadingFavorites(false);
    });
    return unsubscribe;
}

/*
 Adds flavor to Firestore with given flavor information:
 - address: address at which purchase was made
 - amount: amount of expense
 - date: date of purchase
 - imageBucket: bucket at which receipt image is stored in Firebase Storage
 - items: items purchased
 - locationName: name of location
 - uid: user ID who the expense is for
*/
export function addFavorite(
    uid,
    allergyInfo,
    amount,
    category,
    description,
    dietaryCertifications,
    flavorName,
    imgUrl,
    ingredients,
    isAvailable,
    price,
    storeAddress,
    storeName,
    isTastedBefore
) {
    addDoc(collection(db, FAVORITES_COLLECTION), {
        uid,
        allergyInfo,
        amount,
        category,
        description,
        dietaryCertifications,
        flavorName,
        imgUrl,
        ingredients,
        isAvailable,
        price,
        storeAddress,
        storeName,
        isTastedBefore,
    });
}

// Updates favorite with @docId with given information.
export function updateFavorite(
    docId,
    uid,
    allergyInfo,
    amount,
    category,
    description,
    dietaryCertifications,
    flavorName,
    imgUrl,
    ingredients,
    isAvailable,
    price,
    storeAddress,
    storeName
) {
    setDoc(doc(db, FLAVORS_COLLECTION, docId), {
        uid,
        allergyInfo,
        amount,
        category,
        description,
        dietaryCertifications,
        flavorName,
        imgUrl,
        ingredients,
        isAvailable,
        price,
        storeAddress,
        storeName,
    });
}

// Deletes favorite with given @id.
export function deleteFavorite(id) {
    deleteDoc(doc(db, FAVORITES_COLLECTION, id));
}
