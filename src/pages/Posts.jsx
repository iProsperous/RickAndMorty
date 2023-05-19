import React, { useState, useEffect } from "react";
import "../styles/App.css";
import PostList from "../Components/PostList";
import PostFilter from "../Components/PostFilter";
import { usePosts } from "../hooks/usePost";
import { getPagesArray } from "../utils/pages";
import PostService from "../API/PostService";
import { useFetching } from "../hooks/useFetching";

function Posts() {
  let totalPages = 10;
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const posts = await PostService.getAll(page);
    setPosts(posts);
  });
  let pagesArray = getPagesArray(totalPages);

  useEffect(() => {
    fetchPosts(page);
  }, [page]);

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError && <h1>Произошла ошибка ${postError}</h1>}
      {isPostsLoading ? (
        <h1>Идет загрузка...</h1>
      ) : (
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title="Персонажи мультсериала Rick & Morty"
        />
      )}
      <div className="page__wrapper">
        {pagesArray.map((p) => (
          <span
            onClick={() => setPage(p)}
            key={p}
            className={page === p ? "page page__current" : "page"}
          >
            {p}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Posts;
