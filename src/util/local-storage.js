import localForage from 'localforage';

export const get = async(key) => {
  try {
    const state = await localForage.getItem(key)
    if (state === null) return undefined
    return state
  } catch(e) {
    return undefined
  }
}

export const set = async(key, state) => {
  try {
    await localForage.setItem(key, state)
  } catch (e) {
    console.log(e)
  }
}