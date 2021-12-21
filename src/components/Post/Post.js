import React from 'react';
import {Link} from "react-router-dom";

import styles from './Post.module.scss';

const Post = ({ data }) => {
    return (
        <li className={styles.post}>
            <h3><a href={data.url}>{data.title}</a></h3>
            <p>
                <Link to={`/subreddit/${data.subreddit}`}>
                    {data['subreddit_name_prefixed']}
                </Link>&nbsp;
                | {data['num_comments']} comments
                | {data.ups} ups
            </p>
        </li>
    );
}

export default Post;