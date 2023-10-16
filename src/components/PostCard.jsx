import service from "../appwrite/appwrite_config"
import { Link } from 'react-router-dom';

// $id because of appwrite syntax
const PostCard = ({
    $id,
    title,
    featuredImage,
}) => {

    return (
        <Link to={`/post/${$id}`}>
            <div className="w-full p-4 bg-gray-100 rounded-xl ">
                <div className="justify-center w-full mb-4">
                    <img 
                        src={service.getFilePreview(featuredImage)} 
                        alt={title} 
                        className="rounded-xl"
                    />
                </div>
                <h2 className="text-xl font-bold">{title}</h2>
            </div>
        </Link>
    )
}

export default PostCard