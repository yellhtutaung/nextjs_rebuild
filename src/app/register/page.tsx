'use client'

import React, {FormEvent} from "react";
import {useRouter} from "next/navigation";
import {useState} from "react";
import axios from 'axios';
import {NextResponse} from "next/server";

const RegisterPage = () => {

    const [name, setName] = useState("Yell Htut");
    const [username, setUsername] = useState("yellthut4@gmail.com");
    const [password, setPassword] = useState("admin123");
    const router = useRouter();
    // const [btnDisabled, setBtnDisabled] = useState(false);
    const onRegister = async (e: FormEvent) => {
        try {
            e.preventDefault();
            if (name && username && password) {
                const response = await fetch('api/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({name,username,password}),
                });

                if (response.status == 200) {
                    router.push('/login');
                    return NextResponse.json( {
                        status: 200,
                        message: 'Register success || Go to login screen',
                        data: await response.json(),
                    });
                } else {
                    throw new Error('Failed to register. Server returned status ' + response.status);
                }
            } else {
                throw new Error('Name, username, and password are required.');
            }
        } catch (error: any) {
            return NextResponse.json({
                status: 500,
                message: error.message || 'Internal Server Error',
            });
        }
    };

    return (
        <div className="flex justify-center items-center h-screen" >
            <form
                className="card shadow bg-white rounded p-5 w-[350px]"
                onSubmit={onRegister}
            >
                <div className="flex flex-col gap-3">
                    <h3 className="text-black opacity-70 mb-3">Create an account </h3>
                    <input
                        type="text"
                        autoFocus={true}
                        className="text-black opacity-70 p-2 bg-gray-200 rounded"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="text"
                        className="text-black opacity-70 p-2 bg-gray-200 rounded"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="text"
                        className="text-black opacity-70 p-2 bg-gray-200 rounded"
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

export default RegisterPage;