const PASSCRYPTOR_STATE = 'passcryptor_state';
const EMPTY_OBJECT = '{}';

/**
 * Checks the pre existance of the state in localstorage.
 */
export function checkConfExists() {
  return null === localStorage.getItem(PASSCRYPTOR_STATE) ? false : true;
}

/**
 * Gets the state from the localstorage.
 * @returns {a JSON of the passcryptor state}
 */
export function getState() {
  if (!checkConfExists()) {
    return null;
  }
  return JSON.parse(localStorage.getItem(PASSCRYPTOR_STATE));
}

/**
 * Persists the state into the localstorage.
 * @param state JSON representing the application state
 */
export function setState(state) {
  localStorage.setItem(PASSCRYPTOR_STATE, JSON.stringify(state));
}

/**
 * Get a particular value from the localstorage if not present returns a null.
 * @param key String key representing the metrics.
 * @returns {null if not present or the desired value}
 */
export function getValue(key) {
  const state =  getState();
  return null == state ? null : state[key];
}

/**
 * Sets up the value to the key and persistss to the local storage.
 * @param key String key representing the metrics.
 * @param value Any type of value desired.
 */
export function setValue(key, value) {
  let state =  getState();
  state = (null == state ? JSON.parse(EMPTY_OBJECT) : state);
  state[key] = value;
  setState(state);
}