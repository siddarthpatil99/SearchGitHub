import React from 'react'
import { useGithubUser } from '../context'
import UserProfile from '../components/user-profile/UserProfile'
import NotFound from '../components/user-profile/notfound/NotFound';

const User = () => {
    const { user } = useGithubUser();
    console.log(user);
    return (
        <section>
            {user ? (
                <UserProfile 
                    avatar_url = {user.avatar_url} 
                    followers = {user.followers} 
                    html_url = {user.html_url} 
                    name = {user.name || user.login} 
                    public_repos = {user.public_repos} 
                    key = {user.id}
                />
            ) : <NotFound /> } 
        </section>
    )
}

export default User
