import { useEffect, FC } from "react";

const Home:FC = () => {

    useEffect(()=>{
        window.scroll(0,0);
    }, [])
    return ( 
        <h1>Home Page</h1>
     );
}

export default Home;