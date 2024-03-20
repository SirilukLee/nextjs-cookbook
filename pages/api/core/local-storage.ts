const updateStorage = (key: string, data: string) => {
    localStorage.setItem(key, data);
}

const getFromStorageByKey = (key: string, param?: string) => {
    if (!param) {
        return localStorage.getItem(key)
    }

    const storageToJson = JSON.parse(localStorage.getItem(key) as string);
    return typeof storageToJson === 'object' && storageToJson[param];

}

export { updateStorage, getFromStorageByKey};