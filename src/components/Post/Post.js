import React from 'react';
import {Link} from "react-router-dom";

import styles from './Post.module.scss';

import numberWithCommas from "../../helpers/numberWithCommas";

const Post = ({ data }) => {
    return (
        <li className={styles.post}>
            <h3><a href={data.url}>{data.title}</a></h3>
            <p>
                <Link to={`/subreddit/${data.subreddit}`}>
                    {data['subreddit_name_prefixed']}
                </Link>&nbsp;
                | {numberWithCommas(data['num_comments'])} comments
                | {numberWithCommas(data.ups)} ups
            </p>
        </li>
    );
}

export default Post;