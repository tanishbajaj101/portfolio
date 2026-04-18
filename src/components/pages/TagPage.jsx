import React from 'react';
import PropTypes from 'prop-types';
import kebabCase from 'lodash/kebabCase.js';
import styled from 'styled-components';
import { Layout } from '@components';

const StyledTagsContainer = styled.main`
  max-width: 1000px;

  a {
    ${({ theme }) => theme.mixins.inlineLink};
  }

  h1 {
    ${({ theme }) => theme.mixins.flexBetween};
    margin-bottom: 50px;

    a {
      font-size: var(--fz-lg);
      font-weight: 400;
    }
  }

  ul {
    li {
      font-size: 24px;
      h2 {
        font-size: inherit;
        margin: 0;
        a {
          color: var(--light-slate);
        }
      }
      .subtitle {
        color: var(--slate);
        font-size: var(--fz-sm);

        .tag {
          margin-right: 10px;
        }
      }
    }
  }
`;

const TagPage = ({ tag, posts }) => (
  <Layout pathname={`/pensieve/tags/${kebabCase(tag)}`}>
    <StyledTagsContainer>
      <span className="breadcrumb">
        <span className="arrow">&larr;</span>
        <a href="/pensieve">All memories</a>
      </span>

      <h1>
        <span>#{tag}</span>
        <span>
          <a href="/pensieve/tags">View all tags</a>
        </span>
      </h1>

      <ul className="fancy-list">
        {posts.map((post, i) => {
          const { title, slug, date, tags } = post;
          return (
            <li key={i}>
              <h2>
                <a href={slug}>{title}</a>
              </h2>
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
                  tags.map((t, i) => (
                    <a key={i} href={`/pensieve/tags/${kebabCase(t)}/`} className="tag">
                      #{t}
                    </a>
                  ))}
              </p>
            </li>
          );
        })}
      </ul>
    </StyledTagsContainer>
  </Layout>
);

TagPage.propTypes = {
  tag: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
};

export default TagPage;
