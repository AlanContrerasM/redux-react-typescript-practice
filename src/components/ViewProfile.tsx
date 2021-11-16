import { FC } from 'react';
interface Props {
    name?: string;
}
const ViewProfile:FC<Props> = (props)=> {
    return ( <>
        <h2>View profile</h2>
        <h3>{props.name}</h3>
        </>
     );
}

export default ViewProfile;