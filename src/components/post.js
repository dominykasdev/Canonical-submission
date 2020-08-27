import React from 'react';
import { Image, Card, Link } from 'vanilla-framework-react';

const getMonth = (monthNum) => {
    const month = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    return month[monthNum - 1];
}

const Post = ({ props }) => {
    return (
        <Card highlighted>
            <header><h5>{props._embedded["wp:term"][1][0].name}</h5></header>
            <hr />
            <content>
                <Link href={props.link}><Image src={props.featured_media} /></Link>
                <Link href={props.link}><h3>{props.title.rendered}</h3></Link>
                <p><i>By <Link href={props._embedded.author[0].link}>{props._embedded.author[0].name}</Link> on {props._end_day} {getMonth(props._end_month)} {props._end_year}</i></p>
            </content>
            <footer>
                <hr />
                <p>Article</p>
            </footer>
        </Card >
    );
}


export default Post;