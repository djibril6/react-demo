type Key = "refreshToken" | "accessToken";

export const getFromLocalStorage = (key: Key) => {
  return localStorage.getItem(key);
};

export const setToLocalStorage = (key: Key, data: string): void => {
  localStorage.setItem(key, data);
};

export const removeLocalStorage = (key: Key): void => {
  localStorage.removeItem(key);
};
