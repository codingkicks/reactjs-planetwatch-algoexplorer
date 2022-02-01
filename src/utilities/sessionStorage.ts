



export const getSessionStorage = (key: string): string => {
    const storedValue = sessionStorage.getItem(key);
    if (storedValue) return storedValue;
    else return '';
};

export const setSessionStorage = (key: string, value: string) => {
    sessionStorage.setItem(key, value);
};


