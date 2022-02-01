



export const getLocalStorage = (key: string) => {
    const storedValue = localStorage.getItem(key);
    if (storedValue) return storedValue;
    else return '';
};

export const setLocalStorage = (key: string, value: string) => {
    localStorage.setItem(key, value);
};


