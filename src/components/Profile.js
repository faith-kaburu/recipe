import React from 'react';
import '../styles/Profile.css'

export function Profile(){
    return(
        <div >
            {/* Left side of the Page */}
            <div className="p-left">

                {/* Add Profile image here */}
                {/* <img src="" alt="" className="project__img" /> */}

            </div>
            {/* The right side of the Profile Page */}
            <div className="profile-wrapper">
            <h1 className='p-title'>Personal Information</h1>


                <form>

                      <img src="https://tinyurl.com/mwcd944b" alt="" className="avatar" />
                <input
                    type="text"
                    className="profile-name"
                    placeholder="Username"

                />
                <input
                    type="email"
                    className="profile-email"
                    placeholder="Email"
                />
                <input
                    type="password"
                    className="profile-password"
                    placeholder="Password"

                />

                <input
                    type="password"
                    className="profile-password"
                    placeholder="Confirm Password"

                />
                <button className="profile-btn" type="submit" >Update</button>
                </form>
            </div>
        </div>

    )

}
