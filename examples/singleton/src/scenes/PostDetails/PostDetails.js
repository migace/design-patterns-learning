import React, { useEffect, useState } from 'react';
import { isEmpty } from 'lodash';
import { withRouter } from 'react-router-dom'

import { PostsService } from 'services/PostsService';
import { BackButton } from 'common/components/BackButton';

const handleClick = history => () => history.push('/');

export const PostDetailsComponent = (props) => {
  const { match: { params: { id } }, history} = props;
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await new PostsService().getById(id);
      setData(result);
    };

    fetchData();
  }, [id]);

  return (
    <>
      <BackButton onClick={handleClick(history)} />

      {!isEmpty(data) && (
        <article className="message is-dark">
          <div className="message-header">
            <p>
              {data.title}&nbsp;
              <small className="has-text-grey-light">by {data.user.name} ({data.user.email})</small>
            </p>
          </div>
          <div className="message-body">
            {data.body}
          </div>
        </article>
      )}
    </>
  )
};

export const PostDetails = withRouter(PostDetailsComponent);
