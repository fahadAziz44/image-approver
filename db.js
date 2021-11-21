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

var unApprovedStore = localforage.createInstance({
  name        : dbName,
  storeName   : 'unapproved store',
  description : 'unapproved Images'
});


export const dbAddImageToApproved = async(img) => {
  try {
    await localforage.ready()
    await approvedStore.setItem(img.id, img)
  } catch(err) {
    throw new Error(err instanceof Error ? err.message : err)
  }
}

export const dbAddImageToUnApproved = async(img) => {
  try {
    await localforage.ready()
    await unApprovedStore.setItem(img.id, img)
  } catch(err) {
    throw new Error(err instanceof Error ? err.message : err)
  }
}

export const dbGetApprovedImages = async() => {
  try {
    await localforage.ready()
    const approvedImages = []
    await approvedStore.iterate((val, key) => { approvedImages.push(val) })
    return approvedImages
  } catch(err) {
    throw new Error(err instanceof Error ? err.message : err)
  }
}

export const dbGetUnApprovedImages = async() => {
  try {
    await localforage.ready()
    const unApprovedImages = []
    await unApprovedStore.iterate((val, key) => { unApprovedImages.push(val) })
    return unApprovedImages
  } catch(err) {
    throw new Error(err instanceof Error ? err.message : err)
  }
}

export const dbGetAllImages = async() => {
  try {
    await localforage.ready()
    const approvedImages = await dbGetApprovedImages()
    const unApprovedImages = await dbGetUnApprovedImages()
    return {...approvedImages, ...unApprovedImages}
  } catch(err) {
    throw new Error(err instanceof Error ? err.message : err)
  }
}
export const getAllImageKeys = async() => {
  try {
    await localforage.ready()
    const approvedImageKeys = await approvedStore.keys()
    const unApprovedImageKeys = await unApprovedStore.keys()
    return [...approvedImageKeys, ...unApprovedImageKeys]
  } catch(err) {
    throw new Error(err instanceof Error ? err.message : err)
  }
}

