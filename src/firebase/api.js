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
export function addFlavor(
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
    addDoc(
        collection(db, FLAVORS_COLLECTION, {
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
        })
    );
}

/* 
 Returns list of all receipts for given @uid.
 Each receipt contains:
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

export async function getFlavors(uid, setFlavors, setIsLoadingFlavors) {
    const flavorsQuery = query(
        collection(db, FLAVORS_COLLECTION),
        where('uid', '==', uid),
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

// Updates flavor with @docId with given information.
export function updateFlavor(
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

// Deletes flavor with given @id.
export function deleteFlavor(id) {
    deleteDoc(doc(db, FLAVORS_COLLECTION, id));
}
