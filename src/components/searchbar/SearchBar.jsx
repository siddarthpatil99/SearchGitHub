import React, { useRef, useTransition } from 'react'
import { RiSearch2Fill } from 'react-icons/ri'
import { useGithubUser } from '../../context';
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
    const { fetchUser, user } = useGithubUser();
    const [isPending, startTransition] = useTransition();
    const inputRef = useRef(null);
    const navigate = useNavigate();
    const handleUserSearch = () => {
        console.log(inputRef.current.value);
        navigate(`/user/${inputRef.current.value}`)
        startTransition(() => {
            fetchUser(inputRef.current.value);
        })
    }
    return (
        <div className="
                w-1/2 
                flex 
                justify-around 
                items-center
                p-2
                gap-2
                rounded-xl
                bg-[#0F2130] 
                m-auto
                mt-5
        ">
            <input className="
                    w-11/12
                    rounded-none
                    outline-none
                    text-white
                    text-xl 
                    bg-[#0F2130]" 
                type="text" ref={inputRef}  />
            <RiSearch2Fill size={20} onClick={handleUserSearch}
                className="
                    p-1
                    text-black
                    bg-white
                    cursor-pointer
                    rounded-full
            " />
            
        </div>
    );
}

export default SearchBar
