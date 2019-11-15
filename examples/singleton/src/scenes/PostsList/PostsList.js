import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom'

import { PostsService } from 'services/PostsService';

class PostsListComponent extends PureComponent {
  _isMounted = false;
  state = {
    data: [],
  };
  postsService = new PostsService();

  componentDidMount() {
    this._isMounted = true;
    this.postsService.getAll()
      .then(data => {
        if (this._isMounted) {
          this.setState({ data });
        }
      })
      .catch(err => {
        console.log(`Error while downloading content: ${err}`);
      });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  handleClick = (e) => {
    this.props.history.push(`/posts/${e.currentTarget.getAttribute('data-id')}`)
  }

  render() {
    return (
      <table className="table is-fullwidth is-hoverable">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>          
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          {this.state.data.map(post => (
            <tr key={post.id} data-id={post.id} onClick={this.handleClick}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.user.name}</td>
            </tr>
          ))}
        </tbody>
      </table>      
    )
  }
}

export const PostsList = withRouter(PostsListComponent);
