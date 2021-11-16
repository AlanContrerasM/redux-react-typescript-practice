import { FC } from 'react';
import { useLocation, useParams } from "react-router-dom";

const Post:FC = (props) => {

    //way number one
    const {id} = useParams();
    // return ( <h2> Id is = {id}</h2> );
    //one way to do it is just taking it from the props.
    
    // return ( <h2> Id is = {props.match.params.id}</h2> );

    //if we want to get more stuff out of it. like if we threw
    //localhost:3000/post/fef?name=al&last=cont
    //useLocation()
    const query = new URLSearchParams(useLocation().search);
    console.log(props);

    return ( 
        <>
        <h2> Id is = {id}</h2>
        <h2> {query.get('name')}</h2> 
        <h2> {query.get('last')}</h2> 
        </>);
    
}

export default Post;