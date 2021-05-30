import  {useEffect, useState} from 'react'
import {Octokit} from "@octokit/core";

export const useRequest = (initData) => {

    const [userData,setUserData] = useState(initData);
    const [url, setUrl] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [options,setOptions] = useState(null);


    const octokit = new Octokit({
        baseUrl: 'https://api.github.com/users'
    })

    const request = (url,options) => {
        setUrl(url);
        setOptions(options);
    }

    const [didMount, setDidMount] = useState(false)
    useEffect(() => setDidMount(true), [])

    useEffect(()=>{

        if(didMount) {
            const response = async () => {
                setIsLoading(true);
                return await octokit.request(url, options);
            }
            response().then(
                (result) => {
                    // console.log(result)
                    setUserData(result.data);
                    setIsLoading(false);
                    setIsError(false);
                },
                (error) => {
                    setIsError(true);
                    setIsLoading(false);
                }
            );
        }
    },[url,options]);

    return {
        isLoading : isLoading,
        isError : isError,
        data: userData,
        request: request
    };
}




