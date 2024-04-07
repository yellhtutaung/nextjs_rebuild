import { connectDb } from '@/database/mongoDb';
import User from '@/models/userModel';
import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';
import * as console from "console";

export async function POST(request: NextRequest) {
    try {
        await connectDb();

        const { name, username, password } = await request.json();
        if (!name || !username || !password) {
            return NextResponse.json({
                status: 400,
                message: 'Please fill all input.'
            });
        }

        const checkUser = await User.findOne({ username });
        if (checkUser) {
            return NextResponse.json({
                status: 409,
                message: 'User already registered',
                data: checkUser
            });
        }

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        const newUser = new User({
            name,
            username,
            password: hashedPassword
        });

        const response = await newUser.save();
        if(response)
        {
            return NextResponse.json({
                status: 200,
                message: 'User registered successfully',
                data: response
            });
        }
    } catch (error: any) {
        return NextResponse.json({
            status: error.status || 500,
            message: error.message || 'Internal Server Error'
        });
    }
}
