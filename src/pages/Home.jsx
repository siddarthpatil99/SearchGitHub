import React from 'react'
import SearchBar from '../components/searchbar/SearchBar'

const Home = () => {
  return (
    <div>
      <div className="
                w-full
                m-auto
                mt-5
                mb-5
      ">
        <div>
            <h4 className="text-center font-mono text-xl">Search Any GitHub User</h4>
        </div>
        <SearchBar />
      </div>
    </div>
  );
}

export default Home
