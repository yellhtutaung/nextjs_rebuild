import { connectDb } from '@/database/mongoDb';
import User from '@/models/userModel';
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        // return NextResponse.json(await request.json());
        const getUser = await User.find().sort({ _id: -1 });
        if (getUser) {
            return NextResponse.json({
                status: 200,
                message: 'User get successfully',
                data: getUser
            });
        }
    } catch (error: any) {
        return NextResponse.json( {
            status: error.status,
            message: error.message,
        });
    }
}
