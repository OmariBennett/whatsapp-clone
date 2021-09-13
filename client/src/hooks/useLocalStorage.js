import { useEffect, useState } from 'react';

const PREFIX = 'whats-clone';

export default function useLocalStorage(key, initialValue) {
	const prefixedKey = PREFIX + key;
	/* Getting the values in parsing the values from local storage is slow
      so it's best practice to run the func only once 
  */
	const [value, setValue] = useState(() => {
		const jsonValue = localStorage.getItem(prefixedKey);
		if (jsonValue != null) return JSON.parse(jsonValue);

		if (typeof initialValue === 'function') {
			return initialValue();
		} else {
			return initialValue;
		}
	});

	useEffect(() => {
		localStorage.setItem(prefixedKey, JSON.stringify(value));
	}, [prefixedKey, value]);

	return [value, setValue];
}
