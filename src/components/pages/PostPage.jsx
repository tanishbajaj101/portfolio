import React from 'react';
import PropTypes from 'prop-types';
import kebabCase from 'lodash/kebabCase.js';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypePrismPlus from 'rehype-prism-plus';
import styled from 'styled-components';
import { Layout } from '@components';

const StyledPostContainer = styled.main`
  max-width: 1000px;
`;
const StyledPostHeader = styled.header`
  margin-bottom: 50px;
  .tag {
    margin-right: 10px;
  }
`;
const StyledPostContent = styled.div`
  margin-bottom: 100px;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 2em 0 1em;
  }

  p {
    margin: 1em 0;
    line-height: 1.5;
    color: var(--light-slate);
  }

  a {
    ${({ theme }) => theme.mixins.inlineLink};
  }

  code {
    background-color: var(--lightest-navy);
    color: var(--lightest-slate);
    border-radius: var(--border-radius);
    font-size: var(--fz-sm);
    padding: 0.2em 0.4em;
  }

  pre code {
    background-color: transparent;
    padding: 0;
  }
`;

const PostPage = ({ post, pathname }) => {
  const { title, date, tags, body } = post;

  return (
    <Layout pathname={pathname}>
      <StyledPostContainer>
        <span className="breadcrumb">
          <span className="arrow">&larr;</span>
          <a href="/pensieve">All memories</a>
        </span>

        <StyledPostHeader>
          <h1 className="medium-heading">{title}</h1>
          <p className="subtitle">
            <time>
              {new Date(date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span>&nbsp;&mdash;&nbsp;</span>
            {tags &&
              tags.length > 0 &&
              tags.map((tag, i) => (
                <a key={i} href={`/pensieve/tags/${kebabCase(tag)}/`} className="tag">
                  #{tag}
                </a>
              ))}
          </p>
        </StyledPostHeader>

        <StyledPostContent>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[[rehypePrismPlus, { ignoreMissing: true }]]}>
            {body}
          </ReactMarkdown>
        </StyledPostContent>
      </StyledPostContainer>
    </Layout>
  );
};

PostPage.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    tags: PropTypes.array,
    body: PropTypes.string.isRequired,
    slug: PropTypes.string,
  }).isRequired,
  pathname: PropTypes.string,
};

export default PostPage;
