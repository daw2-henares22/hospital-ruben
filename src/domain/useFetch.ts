import { useState } from "react"

type UseFetchState<T> = {
    state: "idle" | "loading" | "error" | "success";
    data: null | T; //UsersApiResponse
    error: null | Error;
}

export default function useFetch<T>(url: string) {//La T es para decir que es de tipo genérico y lo llamo T y esto es para cambiar el data any a genérico
    const [fetchState, setFetchState] = useState<UseFetchState<T>>({
        state: "idle",
        data: null,
        error: null
    });

    useEffect(function(){
        async function fetchData(){
            try{
                setFetchState((oldValue) =>({//Cojo el estado anterior
                    ...oldValue,//Extiendo el estado anterior
                    state: "loading"//Cambio el estado a loading
                }));
                const response = await fetch(url);
                if (response.ok) {
                    const json = await response.json();//Convierto la respuesta a json
                    setFetchState({
                        data: json,//Este es el json que he convertido
                        state: 'success',
                        error: null
                    })
                } else {
                    setFetchState({
                        data: null,
                        state: "error",
                        error: new Error(response.statusText)//Hago un nuevo objeto en la propiedad error con statusText
                    });
                }
            } catch (error){
              setFetchState({
                data: null,
                state: "error",
                error: error as Error
              })
            }
        }
        fetchData();
    }, [url]);//Este array de dependencias es para que se ejecute una sola vez la función

    return fetchState;
}