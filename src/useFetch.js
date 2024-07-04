import { useState, useEffect } from "react"


const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [errMessage, setErrMessage] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal }) // fetch request to server
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
                if(err.name === "AbortError"){
                    console.log("Aborted error");
                }else{
                    setIsPending(false);
                    setErrMessage(err.message);
                }
            })
        }, 1500);

        return () => { abortCont.abort(); };
    }, [url]) // tirggers only on first build

    return { data, isPending, errMessage };
}

export default useFetch;