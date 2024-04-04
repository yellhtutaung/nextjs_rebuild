import {connectDb} from '../../../database/mongooseDb';
import {userCollection} from '../../../models/userModel';
import {NextRequest,NextResponse} from "next/server";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

connectDb();