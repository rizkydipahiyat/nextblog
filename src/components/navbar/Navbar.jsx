"use client";

import React, { useState } from "react";
import classes from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import person from "../../../public/person.jpg";
import { AiOutlineClose } from "react-icons/ai";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { data: session } = useSession();

  const handleShowDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2 className={classes.left}>
          <Link href="/">WebDev</Link>
        </h2>
        <ul className={classes.right}>
          {session?.user ? (
            <div>
              <Image
                onClick={handleShowDropdown}
                src={person}
                alt="Person"
                width={45}
                height={45}
              />
              {showDropdown && (
                <div className={classes.dropdown}>
                  <AiOutlineClose
                    className={classes.closeIcon}
                    onClick={handleShowDropdown}
                  />
                  <button
                    onClick={() => {
                      signOut();
                    }}
                    className={classes.logout}>
                    Logout
                  </button>
                  <Link
                    onClick={handleShowDropdown}
                    href="/create-blog"
                    className={classes.create}>
                    Create
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <>
              <button
                onClick={() => {
                  signIn();
                }}
                className={classes.login}>
                Log In
              </button>
              <Link href="/register">Register</Link>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
