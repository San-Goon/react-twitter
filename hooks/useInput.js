import {useState, useCallback} from "react";

export default (initialValue = null, min, max) => {
    const [value, setValue] = useState(initialValue)
    const [error, setError] = useState(false)
    const handler = useCallback((e) => {
        setValue(e.target.value)
        if (e.target.value.length < min || e.target.value.length > max) {
            setError(true)
        } else {
            setError(false)
        }
    }, [])
    return [value, handler, error, setValue];
}
