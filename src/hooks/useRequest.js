import {useEffect, useState} from 'react'
import {Octokit} from "@octokit/core";
import {GITHUB_API_URL} from "../constants";

export const useRequest = (initData) => {

    const [data, setData] = useState(initData);
    const [url, setUrl] = useState('');
    const [options, setOptions] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);


    //first render
    const [didMount, setDidMount] = useState(false)
    useEffect(() => setDidMount(true), [])

    const setRequest = (url, options) => {
        setUrl(url);
        setOptions(options);
    }

    useEffect(() => {

        const octokit = new Octokit({
            baseUrl: GITHUB_API_URL
        })
        if (didMount) {
            const response = async () => {
                setIsLoading(true);
                return await octokit.request(url, options);
            }
            response().then(
                (result) => {
                    setData(result.data);

                    setIsLoading(false);
                    setIsError(false);
                },
                (error) => {
                    setIsError(true);
                    setIsLoading(false);
                }
            );
        }
    }, [url, options]);

    return {
        isLoading: isLoading,
        isError: isError,
        data: data,
        request: setRequest
    };
}




