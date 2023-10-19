import { useEffect, useState } from 'react'
import appwriteService from '../appwrite/appwrite_config'
import {Container, PostCard} from '../components'

const AllPosts = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {

    }, [])
    
    appwriteService.getPosts([]).then(
        (recievedPosts) => {
            if(recievedPosts){
                setPosts(recievedPosts.documents)
            }
        }
    )
    
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='w-1/4 p-2'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
        </Container>
    </div>
  )
}

export default AllPosts