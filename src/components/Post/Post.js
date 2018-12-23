import React from "react";
import PropTypes from "prop-types";

import Article from "../Main/Article";
import PostHeader from "./PostHeader";
import Content from "../Main/Content";
import PostFooter from "./PostFooter";

const Post = props => {
  const { post, author, showAuthor, slug, facebook } = props;
  const frontmatter = (post || {}).frontmatter;
  const title = ((post || {}).frontmatter || {}).title;
  const subtitle = ((post || {}).frontmatter || {}).subtitle;
  const cover = ((post || {}).frontmatter || {}).cover;
  const demo = ((post || {}).frontmatter || {}).demo;
  const source = ((post || {}).frontmatter || {}).source;
  const date = ((post || {}).fields || {}).prefix;
  const html = (post || {}).html;
  const htmlAst = (post || {}).htmlAst;
  return (
    <Article>
      <PostHeader title={title} subtitle={subtitle} date={date} cover={cover} demo={demo} source={source} />
      <Content html={html} />
      <PostFooter author={author} showAuthor={showAuthor} post={post} slug={slug} facebook={facebook} />
    </Article>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
  author: PropTypes.object.isRequired,
  showAuthor: PropTypes.bool.isRequired,
  slug: PropTypes.string.isRequired,
  facebook: PropTypes.object.isRequired
};

export default Post;
