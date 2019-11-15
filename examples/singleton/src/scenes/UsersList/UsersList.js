import React, { useEffect, useState } from 'react';
import { isEmpty } from 'lodash';

import { UsersService } from 'services/UsersService';
import { BackButton } from 'common/components/BackButton'

const handleClick = history => () => history.push('/');

export const UsersList = (props) => {
  const { match: { params: { id } }, history} = props;
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await new UsersService().getAll();
      setData(result);
    };

    fetchData();
  }, [id]);

  return (
    <>
      <BackButton onClick={handleClick(history)} />

      {!isEmpty(data) && (
        <table className="table is-fullwidth is-hoverable">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            {data.map(user => (
              <tr key={user.id} data-id={user.id} onClick={handleClick(history)}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.website}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};
