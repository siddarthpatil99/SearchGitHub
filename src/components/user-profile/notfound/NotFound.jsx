import React from 'react'
import { RxCrossCircled } from 'react-icons/rx'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center">
        <RxCrossCircled size={30} />
        <h3 className="font-mono text-2xl mt-4">User not found, Try Again</h3>
        <Link className="flex justify-center items-center font-bold no-underline mt-4" to={"/"}>
            <MdOutlineArrowBackIosNew size={30} />Back to homepage
        </Link>
    </div>
  )
}

export default NotFound
