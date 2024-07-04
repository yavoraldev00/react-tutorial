import { useState, useEffect } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [errMessage, setErrMessage] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url) // fetch request to server
            .then((res) => {
                if(!res.ok){ // error handling after connecting to server
                    throw Error("Could not fetch data from resource") // creates error messages
                }
                return res.json();
            }).then((data) => {
                console.log(data);
                setData(data);
                setIsPending(false);
                setErrMessage(null);
            }).catch(err => { // error on encountered problem in connection
                setIsPending(false);
                setErrMessage(err.message);
            })
        }, 1500);
    }, [url]) // tirggers only on first build

    return { data, isPending, errMessage };
}

export default useFetch;