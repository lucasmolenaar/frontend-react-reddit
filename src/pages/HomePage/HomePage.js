import React, { useEffect, useState } from 'react';
import axios from "axios";

import LoadingRoller from "../../components/LoadingRoller/LoadingRoller";
import Post from "../../components/Post/Post";

import styles from './HomePage.module.scss';

const HomePage = () => {
    const [allPosts, setAllPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const { data: { data: { children } } } = await axios.get(`https://www.reddit.com/hot.json?limit=15`);
                setAllPosts(children);
            } catch (e) {
                console.error(e);
                alert('Er is iets mis gegaan, probeer het later opnieuw')
            }
        }
        fetchPosts();
    }, [])

    return (
        <div className={styles['home-page']}>
            <h1 className={styles.title}>Hottest 15 posts on Reddit</h1>
            <h2 className={styles.subtitle}>Overview</h2>

            {
                Object.keys(allPosts).length > 0 ?
                    <ul className={styles['posts-list']}>
                        {
                            allPosts.map(({ data }) => {
                                return (
                                    <Post key={data.created} data={data}/>
                                );
                            })
                        }
                    </ul>
                    :
                    <LoadingRoller />
            }
        </div>
    );
}

export default HomePage;