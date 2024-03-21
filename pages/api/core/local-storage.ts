
const updateStorage = (key: string, data: string) => {
    console.log(key, data)
    localStorage.setItem(key, data);
}

const getFromStorageByKey = (key: string, param?: string) => {
    if (!param) {
        console.log(localStorage.getItem(key))
        return localStorage.getItem(key)
    }

    const storageToJson = JSON.parse(localStorage.getItem(key) as string);
    console.log(storageToJson)
    return typeof storageToJson === 'object' && storageToJson[param];

}

export { updateStorage, getFromStorageByKey};