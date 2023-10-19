import { useEffect, useState } from 'react'
import { Container, PostForm } from '../components'
import appwriteServices from '../appwrite/appwrite_config'
import { useNavigate, useParams } from 'react-router-dom'

const EditPost = () => {
    const [post, setPosts] = useState([])
    const {slug} = useParams()
    const navigate = useNavigate()
    
    useEffect(() => {
        if(slug){
            appwriteServices.getPost(slug).then(
                (recievedPost) => {
                    if(recievedPost){
                        setPosts(recievedPost)
                    }
                }
            )
        }
        else{
            navigate('/')
        }
    }, [slug, navigate])
    
    return post ? (
        <div className='py-8'>
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    ) : null
}

export default EditPost