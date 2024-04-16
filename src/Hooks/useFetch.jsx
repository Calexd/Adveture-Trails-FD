import { useEffect, useState } from "react"; 


function useFetch(jsonData) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (jsonData) {
            setData(jsonData)
            setLoading(false)
        } else {
            setLoading(false)
        }
    }, [jsonData])
    console.log(data)
    return [data, loading]
}

export default useFetch