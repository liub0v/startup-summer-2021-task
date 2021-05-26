import React, {useEffect, useState} from 'react'
import {Octokit} from "@octokit/core";

export const useRequest = () => {

    const [userData,setUserData] = useState({});
    const [request, setRequest] = useState({
        octokit: null,
        url:''
    });
    const [url, setUrl] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState(0);

    const octokit = new Octokit({
        baseUrl: 'https://api.github.com/users'
    })

    const [didMount, setDidMount] = useState(false)
    useEffect(() => setDidMount(true), [])

    useEffect(()=>{

        if(didMount) {
            const response = async () => {
                setIsLoading(true);
                return await octokit.request(url);
            }
            response().then(
                (result) => {
                    console.log(result)
                    setUserData(result);

                    setStatus(result.status);
                    setIsLoading(false);
                },
                (error) => {
                    setStatus(error.status);
                    setIsLoading(false);
                }
            );
        }
    },[url]);

    return {
        isLoading : isLoading,
        status : status,
        data: userData,
        request: setUrl
    };
}




