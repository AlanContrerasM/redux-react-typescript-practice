import { useEffect, useState, useRef } from "react";

interface InitialState {
    data:any;
    loading:boolean;
    error: any;
}

export const useFetch = (url:string): InitialState=> {
  const isCurrent = useRef(true);
  const initialValue: InitialState = {
     data: null, loading: true , error: null
  };
  const [state, setState] = useState(initialValue);


  

  useEffect(() => {
    return () => {
      // called when the component is going to unmount
      isCurrent.current = false;
    };
  }, []);

  useEffect(() => {
    setState(state => ({ data: state.data, loading: true, error: null }));
    fetch(url)
      .then(data => {
            if(!data.ok){
                throw Error('Could not fetch data for that resource. ' + data.statusText )
            }
          return data.json()
        })
      .then(y => {
        setTimeout(() => {
          if (isCurrent.current) {
            setState({ data: y, loading: false, error: null });
          }
        }, 2000);
      })
      .catch((err)=>{
        console.log(err.message);
        setState(state => ({ ...state, loading: false, error: err.message }))
    });

  }, [url, setState]);

  return state;
};