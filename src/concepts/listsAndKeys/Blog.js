// ==========  Keys Must Only Be Unique Among Siblings  ==========

/*  Keys used within arrays should be unique among their siblings. However, they don’t need to be globally unique. We can use the same keys when we produce two different arrays: */

import React from "react";

export function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
  const content = props.posts.map((post) => (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  ));
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

// Keys serve as a hint to React but they don’t get passed to your components. If you need the same value in your component, pass it explicitly as a prop with a different name:

/* const content = posts.map((post) =>
    <Post
      key={post.id}
      id={post.id}
      title={post.title} />
  ); */

// With the example above, the Post component can read props.id, but not props.key.
