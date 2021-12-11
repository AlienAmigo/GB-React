import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TOGGLE_SHOW_PROFILE from 'store/profile/action';

interface ISelector {
  isShow: boolean;
}

const Profile = () => {
  const dispatch = useDispatch();
  const isShow = useSelector<ISelector>(state => state.isShow);

  return (
    <>
      <h1>Profile</h1>

      <input
        type="checkbox"
        checked={isShow as any}
        onChange={() => {
          dispatch({
            type: TOGGLE_SHOW_PROFILE
          });
        }}
      />
    </>
  );
};

export default Profile;
