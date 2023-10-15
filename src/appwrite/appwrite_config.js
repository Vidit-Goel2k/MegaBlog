import config from "../config/config";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client()
    datbases
    bucket
    
    constructor(){
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId)
        this.datbases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            const createdPost = await this.datbases.createDocument(
                config.appwriteDatabaseId, 
                config.appwriteCollectionId, 
                slug, 
                {
                    title,
                    content, 
                    featuredImage,
                    status,
                    userId,
                }
            )
            return createdPost 
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error)
        }
    }
    
    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            const updatedPost = await this.datbases.updateDocument(
                config.appwriteDatabaseId, 
                config.appwriteCollectionId, 
                slug, 
                {
                    title,
                    content, 
                    featuredImage,
                    status,
                }
            )
            return updatedPost 
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error", error)
        }
    }

    async deletePost(slug){
        try {
            const deletedPost = await this.datbases.deleteDocument(
                config.appwriteDatabaseId, 
                config.appwriteCollectionId, 
                slug, 
            )
            return deletedPost 
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error", error)
        }
    }
    
    async getPost(slug){
        try {
            const recievedPost = await this.datbases.getDocument(
                config.appwriteDatabaseId, 
                config.appwriteCollectionId, 
                slug, 
            )
            return recievedPost 
        } catch (error) {
            console.log("Appwrite service :: getPost :: error", error)
        }
    }

    async getPosts(queries = [Query.equal('status', 'active')]){
        try {
            const recievedPosts = await this.datbases.listDocuments(
                config.appwriteDatabaseId, 
                config.appwriteCollectionId, 
                queries,
            )
            return recievedPosts 
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error", error)
        }
    }
}

const service = new Service()

export default service