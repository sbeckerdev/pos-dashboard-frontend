/*
 1.	Author: Sergio Becker
 2.	Description: Sign In page.
 3.	Version:
    a.	Beta: 0.9
    b.	Major:
    c.	Minor:
    d.	Path:

 */
"use client";
import { Button, Divider, Input } from "@nextui-org/react";
import React from "react";

import { MailIcon } from "./Icons/MailIcon";
import { EyeFilledIcon } from "./Icons/EyeFilledIcon";
import { EyeSlashFilledIcon } from "./Icons/EyeSlashFilledIcon";
export default function SignIn() {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="bg-[#F9F9F9] p-10  h-screen w-screen">
      <div className="flex flex-col m-[10%] mx-auto p-16 justify-center  items-center  w-1/5 bg-[#FFFF] rounded-3xl text-slate-950 ">
        <div className="mb-5   ">
          <h1>Logo</h1>
        </div>
        <div className="mb-5    ">
          <h1>Welcome to </h1>
        </div>
        <div className="mb-5   ">
          <p>Ready to dive back in? Sign in below</p>
        </div>
        <div className="mb-5 w-full  ">
          <Input
            isRequired
            className="w-full"
            endContent={
              <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
            isInvalid={false}
            label="Email"
            labelPlacement="inside"
            placeholder="you@example.com"
            type="email"
          />
        </div>
        <div className="mb-5 w-full   ">
          <Input
            isRequired
            className="w-full  "
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            isInvalid={false}
            label="Password"
            labelPlacement="inside"
            placeholder="Enter your password"
            type={isVisible ? "text" : "password"}
          />
        </div>
        <div className=" w-full    ">
          <Button
            className=" w-full rounded-2xl"
            color="primary"
            radius="lg"
            size="lg"
            variant="solid"
          >
            Sign in{" "}
          </Button>
        </div>
        <div className="mb-5 w-full ">
          <p className="mb-5 text-center mt-5">Or authenticate with</p>
          <Divider className="mb-5 mt-5" orientation="horizontal" />
          <Button
            className=" w-full rounded-2xl"
            color="primary"
            radius="lg"
            size="lg"
            variant="flat"
          >
            Single Sign-On ( Win / Mac ){" "}
          </Button>
        </div>
      </div>
    </div>
  );
}
