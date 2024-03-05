import { NextPage } from "next";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import Navbar from '../components/navbar'; 

const HomePage: NextPage = () => {
  const { data: session } = useSession();

  const user = session?.user;
  return (
    <div className="container">
      <Navbar /> 
      <div className="grid place-content-center min-h-screen">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl my-8">Welcome</h1>

          {user ? (
            <>
              <h2>You are logged in as Hey how{user?.email} </h2>

              <button className="btn" onClick={() => signOut()}>
                Sign Out
              </button>
            </>
          ) : (
            <Link className="btn btn-outline" href="/signin">
              Sign In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
