import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

function Tag({ name }) {
    const tagColors = {
        html: 'green',
        css: 'orange',
        js: 'blue',
        php: 'red'
    };

    const tag = {
        backgroundColor: tagColors[name.toLowerCase()],
        color: 'white',
        borderRadius: '5px',
        padding: '5px',
        marginRight: '5px'
    };

    return <span style={tag}>{name}</span>;
}

export default function PostList() {
    const posts = [
        {
            id: 1,
            title: "Titolo del Post",
            image: "https://placehold.co/600x400",
            content:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
            tags: ["html", "css"],
            published: true,
        },
        {
            id: 2,
            title: "Titolo del Post",
            image: "https://placehold.co/600x400",
            content:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
            tags: ["js", "css"],
            published: true,
        },
        {
            id: 3,
            title: "Titolo del Post",
            image: "https://placehold.co/600x400",
            content:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
            tags: ["js", "php"],
            published: true,
        },
        {
            id: 4,
            title: "Titolo del Post",
            image: "https://placehold.co/600x400",
            content:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
            tags: ["html"],
            published: false,
        },
    ];

    return (
        <main>
            <div className="container">
                <Row xs={1} md={3} className="g-4">
                    {posts
                        .filter(post => post.published)
                        .map(post => (
                            <Col key={post.id}>
                                <Card className="mb-4">
                                    {post.image && <Card.Img variant="top" src={post.image} className="img-fluid" />}
                                    <Card.Body>
                                        <Card.Title>{post.title}</Card.Title>
                                        <Card.Text>{post.content}</Card.Text>
                                        <div>
                                            {post.tags.map(tag => <Tag key={tag} name={tag} />)}
                                        </div>
                                        <Button variant="danger" className='mt-2'>Leggi di più</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                </Row>
            </div>
        </main>
    );
}
