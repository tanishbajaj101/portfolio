import React from 'react';
import PropTypes from 'prop-types';
import kebabCase from 'lodash/kebabCase.js';
import styled from 'styled-components';
import { Layout } from '@components';

const StyledTagsContainer = styled.main`
  max-width: 1000px;

  h1 {
    margin-bottom: 50px;
  }
  ul {
    color: var(--light-slate);

    li {
      font-size: var(--fz-xxl);

      a {
        color: var(--light-slate);

        .count {
          color: var(--slate);
          font-family: var(--font-mono);
          font-size: var(--fz-md);
        }
      }
    }
  }
`;

const TagsPage = ({ tags }) => (
  <Layout pathname="/pensieve/tags">
    <StyledTagsContainer>
      <span className="breadcrumb">
        <span className="arrow">&larr;</span>
        <a href="/pensieve">All memories</a>
      </span>

      <h1>Tags</h1>
      <ul className="fancy-list">
        {tags.map(tag => (
          <li key={tag.fieldValue}>
            <a
              href={`/pensieve/tags/${kebabCase(tag.fieldValue)}/`}
              className="inline-link">
              {tag.fieldValue} <span className="count">({tag.totalCount})</span>
            </a>
          </li>
        ))}
      </ul>
    </StyledTagsContainer>
  </Layout>
);

TagsPage.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      fieldValue: PropTypes.string.isRequired,
      totalCount: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default TagsPage;
