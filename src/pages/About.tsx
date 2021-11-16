import { FC } from 'react';
interface Props{
    name: string;
}
const About:FC<Props> = ({name}) => {
    return ( 
        <h1>{name}</h1>
     );
}

export default About;