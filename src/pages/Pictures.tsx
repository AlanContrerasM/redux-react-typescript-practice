import React, {FC} from 'react';
import { useParams } from "react-router-dom";
import { useFetch } from '../components/hooks/useFetch';

const Pictures:FC = () => {
    const {search} = useParams();

    const id = "24326252-a44aebf7e29551393fc7887c2";//should be handled by our server and protect key with process.env
    const editorsChoice = false;
    const perPage = 5;
    const url = `https://pixabay.com/api/?key=${id}&q=${search}&per_page=${perPage}&editors_choice=${editorsChoice}`;
    const { data, loading, error } = useFetch(url);
    console.log(data);

    const styles: { [key: string]: React.CSSProperties } = {
        container: {
            display: "grid", 
            gridTemplateColumns: "1fr 1fr",
            padding: "20px", 
            maxWidth: "80%", 
            margin: "auto"
        },
        textContent: {
            overflow: "hidden",
            padding: "30px",
            backgroundColor: "rgb(220, 229, 238)",
            textAlign: "left"
        },
      };
    
    
    return (
        <>
            {!data ? (loading ? "...loading" : error)
            : data.hits.map((picture:any) => {
                // console.log("creating: ", picture);
                return( 
                    <div key={picture.id} style={styles.container}>
                        <img alt="img" src={picture.webformatURL}/>
                        <div style={styles.textContent}> 
                            <h3 style={{textAlign: "center"}}>Image Details</h3>
                            <p><strong>Downloads</strong>: {picture.downloads}</p>
                            <p style={{wordWrap: "break-word"}}><strong>Large Image URL</strong>: <a href={picture.largeImageURL}>{picture.largeImageURL}</a></p>
                            <p><strong>Image Likes</strong>: {picture.likes}</p>
                            <p><strong>Tags</strong>: {picture.tags}</p>
                            <p><strong>Image type</strong>: {picture.type}</p>
                            <p><strong>User</strong>: {picture.user_id}</p>
                            <p style={{wordWrap: "break-word"}}><strong>URL</strong>: <a href={picture.pageURL}>{picture.pageURL}</a></p>
                        </div>
                    </div>
                    )
            })} 
        </>
    ) 
}

export default Pictures
