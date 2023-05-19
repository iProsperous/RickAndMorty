import React from "react";
import MyButton from "./UI/button/MyButton";
import { useNavigate } from "react-router-dom";

const PostItem = (props) => {
  const router = useNavigate();
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.post.id}. {props.post.name}
        </strong>
      </div>
      <div className="post__content flex mrgn">
        <div className="article">
          <p>
            <span className="item">Статус жизни:</span> {props.post.status}
          </p>
          <p>
            <span className="item">Пол:</span> {props.post.gender}
          </p>
          <p>
            <span className="item">Планета:</span> {props.post.origin.name}
          </p>
          <div className="post__content flex">
            <div className="post__btns">
              <MyButton onClick={() => router(`/posts/${props.post.id}`)}>
                Открыть
              </MyButton>
            </div>
            <div className="post__btns">
              <MyButton onClick={() => props.remove(props.post)}>
                Удалить
              </MyButton>
            </div>
          </div>
        </div>
        <img src={props.post.image} />
      </div>
    </div>
  );
};

export default PostItem;
