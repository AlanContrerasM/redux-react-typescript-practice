import {useState, } from 'react'


interface Form{title: string; comments: string;}

export const useForm = (initialValues: Form): [Form, (e: React.ChangeEvent<HTMLInputElement>)=> void] => {
    

    const [values, setvalues] = useState(initialValues)

    return [
        values,
               
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setvalues({
                ...values,
                [e.target.name]: e.target.value
            });
        }
    ];

}

