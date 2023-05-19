import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import { useFetching } from "../hooks/useFetching";

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const responce = await PostService.getById(params.id);

    setPost(responce.data.location);
  });

  const [fetchСomments, isComLoading, comError] = useFetching(async () => {
    const responce = await PostService.getCommentsByPostId(params.id);
    setComments(responce.data);
  });

  useEffect(() => {
    fetchPostById(params.id);
    fetchСomments(params.id);
  }, []);

  return (
    <div>
      <h1>Вы открыли страницу поста c ID = {params.id} </h1>
      {isLoading ? <span>Идет загрузка</span> : <h2>Локация: {post.name}</h2>}
      {isComLoading ? (
        <span>Идет загрузка</span>
      ) : (
        <h2> Тип местности: {comments.type}</h2>
      )}
    </div>
  );
};

export default PostIdPage;
