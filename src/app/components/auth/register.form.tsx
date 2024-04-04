'use client'

import React, {FormEvent} from "react";
// import {useRouter} from "next/router";
import {useState} from "react";

const RegisterForm  = async () =>
{
    return (
        <div className="flex justify-center items-center h-screen">
            <form
                className="card shadow bg-white rounded p-5 w-[300px]"
                onSubmit={onRegister}
            >
                <div className="flex flex-col gap-3">
                    <h3 className="text-black opacity-70 mb-3">Create an account </h3>
                    <input
                        type="text"
                        autoFocus={true}
                        className="text-black opacity-70 p-2 bg-gray-100 rounded"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="text"
                        className="text-black opacity-70 p-2 bg-gray-100 rounded"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        className="text-white rounded bg-black p-2 mt-3"
                        type="submit">Register
                    </button>
                </div>
            </form>
        </div>

    );
};

export default RegisterForm;
