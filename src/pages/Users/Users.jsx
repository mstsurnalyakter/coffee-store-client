import React from 'react'
import PropTypes from 'prop-types'
import useUsers from '../../hooks/useUsers'
import { SpinnerCircular } from 'spinners-react';
import UsersCard from '../../components/UsersCard/UsersCard';

const Users = () => {
    const {loadUsers,isLoading,refetch} = useUsers();


    if (isLoading) {
        return (
          <div className='flex items-center justify-center mt-44'>
            <SpinnerCircular
              size={88}
              thickness={180}
              speed={165}
              color="rgba(57, 172, 67, 1)"
              secondaryColor="rgba(172, 57, 57, 0.37)"
            />
          </div>
        );
    }

  return (
    <div>
        <h3>Users : {loadUsers?.length}</h3>
        <div className='flex gap-3 flex-wrap mx-5 items-center justify-center'>
            {
                loadUsers?.length && loadUsers?.map(user=><UsersCard key={user._id} user={user} />)
            }
        </div>
    </div>
  )
}

Users.propTypes = {}

export default Users