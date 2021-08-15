import React, { useEffect, useState } from 'react'
import Navbar from '../Common/Navbar/Navbar'
import Title from './Title'
import Wrapper from './Wrapper'
import axios from 'axios'
import { useLocation } from 'react-router-dom'


function Blog() {
    const [posts, setPosts] = useState([]);
    const {search} = useLocation();

    useEffect( () => {
        const featchPosts = async ()=> {
            const res = await axios.get("/posts" + search); 
            setPosts(res.data); 
        }
        featchPosts();
    }, [search])
    return (
        <>
            <Title />
            <Navbar />
            <Wrapper posts={posts} />
        </>
    )
}

export default Blog
