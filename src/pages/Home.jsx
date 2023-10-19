import { useEffect, useState } from 'react'
import appwriteService from '../appwrite/appwrite_config'
import { Container, PostCard } from '../components'
import { useSelector } from 'react-redux'

const Home = () => {

    const authStatus = useSelector(state=>state.auth.status)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        authStatus && appwriteService.getPosts().then(
            (recievedPosts) => {
                if(recievedPosts){
                    setPosts(recievedPosts.documents)
                }
            }
        )
    }, [authStatus])
    

    if(posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="w-full p-2">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    
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

export default Home