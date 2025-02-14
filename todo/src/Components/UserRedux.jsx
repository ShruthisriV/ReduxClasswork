import React, { useActionState, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import store from '../redux/store'
import fetchUserMiddleware from '../userMiddleware'
import userSlice from '../redux/UserSlice'

const actions = userSlice.actions;
function UserRedux() {
    const dispatch = useDispatch();
    const [value, setValue] = useState();
    const handleParam = () => {
        dispatch(actions.setParam(value))
    }

    const {error, loading, userData: user, param} = useSelector((store) => {
        return store.userState
    })
    
    useEffect(()=>{
        dispatch(fetchUserMiddleware(param));
    }, [param]);

    const heading = <h2>User Example</h2>
    if(loading){
        return <>
            {heading}
            <h3>...Loading</h3>
        </>
    }
    if(error){
        return <>
            {heading}
            <h3>Error Occured: {error}</h3>
        </>
    }

  return (
    <>
        {heading}
        <input type='text' value={value} onChange={(e) => {
            setValue(e.target.value)}}/>
        <button onClick={handleParam}>Get User</button>
        <h4>{user.name}</h4>
        <h4>{user.phone}</h4>
    </>
  )
}

export default UserRedux