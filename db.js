// import { openDB } from "idb";

// export const idb = {
//   db1: openDB("db1", 1),
//   db2: openDB("db2", 1)
// };

import localforage from "localforage"

const dbName = 'image-approver';

localforage.config({
  driver      : [localforage.INDEXEDDB, localforage.WEBSQL, localforage.LOCALSTORAGE],
  name        : 'image-approver-db',
  version     : 1.0,
  size        : 4980736, // for webSql only
  storeName   : 'keyvaluepairs', // Should be alphanumeric, with underscores.
  description : 'some description'
});


var approvedStore = localforage.createInstance({
  name        : dbName,
  storeName   : 'approved store',
  description : 'approved images'
});

// Create table 2 in databaseName
var unApprovedStore = localforage.createInstance({
  name        : dbName,
  storeName   : 'unapproved store',
  description : 'unapproved Images'
});


export const dbAddImageToApproved = async(img) => {
  try {
    await approvedStore.setItem(img.id, JSON.stringify(img))
  } catch(err) {
    throw new Error(err instanceof Error ? err.message : err)
  }
}

export const dbAddImageToUnApproved = async(img) => {
  try {
    await unApprovedStore.setItem(img.id, img)
  } catch(err) {
    throw new Error(err instanceof Error ? err.message : err)
  }
}

export const dbGetApprovedImages = async() => {
  try {
    const approvedImages = await approvedStore.iterate((val, key) => {
      return {
        [key]: val
      }
    })
    return approvedImages
  } catch(err) {
    throw new Error(err instanceof Error ? err.message : err)
  }
}

export const dbGetUnApprovedImages = async() => {
  try {
    const approvedImages = await unApprovedStore.iterate((val, key) => {
      return {
        [key]: val
      }
    })
    return approvedImages
  } catch(err) {
    throw new Error(err instanceof Error ? err.message : err)
  }
}

export const dbGetAllImages = async() => {
  try {
    const approvedImages = await dbGetApprovedImages()
    const unApprovedImages = await dbGetUnApprovedImages()
    return {...approvedImages, ...unApprovedImages}
  } catch(err) {
    throw new Error(err instanceof Error ? err.message : err)
  }
}

