import React from 'react'
import { FcLike } from 'react-icons/fc'
import { FaCodeCompare } from 'react-icons/fa6'
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";

const UserProfile = ({ 
    avatar_url, 
    name, 
    followers,
    public_repos, 
    html_url 
}) => {
  return (
    <section className="flex flex-col justify-center items-center">
      <img className="w-80 rounded-full" src={avatar_url} alt={name} />
      <h4 className="font-semibold font-mono text-4xl">{name}</h4>
      <div className="flex justify-center items-center gap-10">
        <div className="flex flex-col justify-center items-center text-xl mt-3">
          <FcLike />
          <article>{followers}</article>
        </div>
        <div className="mt-3 flex flex-col justify-center items-center text-xl">
          <FaCodeCompare />
          <article>{public_repos}</article>
        </div>
      </div>
      <Link
        className="flex justify-center items-center font-bold no-underline mt-4"
        to={"/"}
      >
        <MdOutlineArrowBackIosNew size={30} />
        Back to homepage
      </Link>
    </section>
  );
}

export default UserProfile
