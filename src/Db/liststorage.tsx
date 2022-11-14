import { getStorage, ref, listAll } from "firebase/storage";
import { app } from "./firebase";

const storage = getStorage(app);

// Create a reference under which you want to list
const listRef = ref(storage, 'gs://portfolio-mkdesigner.appspot.com/img/');

// Find all the prefixes and items.
listAll(listRef)
  .then((res) => {
    res.prefixes.forEach((folderRef) => {
      // All the prefixes under listRef.
      // You may call listAll() recursively on them.
    });
    res.items.forEach((itemRef) => {
        // All the items under listRef.
    });
}).catch((error) => {
    // Uh-oh, an error occurred!
});


export {listAll, listRef}
