import React, { useEffect, useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { styled, Box, Button, Typography } from '@mui/material';
import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';

const Container = styled(Box)(({ theme }) => ({
    margin: '50px 100px',
    [theme.breakpoints.down('md')]: {
        margin: 0
    }
}));

const Image = styled('img')({
    width: '100%',
    height: '50vh',
    objectFit: 'cover'
});

const DeletePost = () => {
    const [post, setPost] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
    const { account } = useContext(DataContext);

    const defaultImage = 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';

    useEffect(() => {
        const fetchPost = async () => {
            const response = await API.getPostById(id);
            if (response.isSuccess) {
                setPost(response.data);
            }
        };
        fetchPost();
    }, [id]);

    const deleteBlogPost = async () => {
        await API.deletePost(id);
        navigate('/');
    }

    return (
        <Container>
            <Image src={post.picture || defaultImage} alt="post" />
            <Typography variant="h3" gutterBottom>{post.title}</Typography>
            <Typography variant="body1" gutterBottom>{post.description}</Typography>
            {account.username === post.username && (
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={deleteBlogPost}
                >
                    Delete
                </Button>
            )}
        </Container>
    );
}

export default DeletePost;
