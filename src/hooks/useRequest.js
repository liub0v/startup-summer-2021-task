import  {useEffect, useState} from 'react'
import {Octokit} from "@octokit/core";

export const useRequest = (initData) => {

    const [userData,setUserData] = useState(initData);
    const [url, setUrl] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState(0);
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
                    console.log(result)
                    setUserData(result.data);
                    setStatus(result.status);
                    setIsLoading(false);
                },
                (error) => {
                    setStatus(error.status);
                    setIsLoading(false);
                }
            );
        }
    },[url,options]);

    return {
        isLoading : isLoading,
        status : status,
        data: userData,
        request: request
    };
}




