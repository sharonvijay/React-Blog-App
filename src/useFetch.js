import {useState,useEffect} from "react";
const useFetch = (url) =>{
    const [data,setData] = useState(null);
    const [isPending,setIsPending] = useState(true);
    const [error,setError] = useState();

    useEffect(()=>{
        const abortCont = new AbortController();
        setTimeout(()=>{
            fetch(url , {signal : abortCont.signal})
               .then(res=> {
                if(!res.ok)
                {
                    throw Error('Could not fetch the data for the resource');
                }
                return res.json();
               })
               .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
               })
               .catch(err=>{
                if(err.message==='AbortError')
                {
                    console.log('fetch aborted')
                }
                setIsPending(false);
                setError(err.message);
               }
               )
        },1000)

        return () => abortCont.abort();
    },[url]);

    return {data,isPending,error}

}

export default useFetch;