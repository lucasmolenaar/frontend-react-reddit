import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";

import styles from './SubredditPage.module.scss';
import notFound from '../../assets/notfound.jpg';
import numberWithCommas from "../../helpers/numberWithCommas";

import BackToOverview from "../../components/BackToOverview/BackToOverview";
import LoadingRoller from "../../components/LoadingRoller/LoadingRoller";

const SubredditPage = () => {
    const { subredditName } = useParams();
    const [ subreddit, setSubreddit ] = useState({});

    useEffect(() => {
        const fetchSubreddit = async () => {
            try {
                const { data: { data }} = await axios.get(`https://www.reddit.com/r/${subredditName}/about.json`);
                setSubreddit(data);
            } catch (e) {
                console.error(e);
            }
        }

        fetchSubreddit();
    }, [])


    return (
        Object.keys(subreddit).length > 0 ?
        <div className={styles['subreddit-page']}>
            <h1 className={styles['subreddit-name']}>{subreddit['display_name_prefixed']}</h1>

            {
                subreddit['banner_img'] ?
                    <img className={styles.banner} src={subreddit['banner_img']} alt="subreddit-banner"/>
                    :
                    <img className={styles.banner} src={notFound} alt="cartoon"/>
            }


            <h1 className={styles.title}>{subreddit.title}</h1>

            <p className={styles.description}>
                {subreddit['public_description']}
            </p>

            <p className={styles.subscribers}>Subscribers: {numberWithCommas(subreddit.subscribers)}</p>

            <BackToOverview />
        </div>
            :
            <LoadingRoller />
    );
};

export default SubredditPage;