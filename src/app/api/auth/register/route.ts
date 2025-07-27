/* eslint-disable @typescript-eslint/no-explicit-any */
import { writeFile, readFile } from 'fs/promises';
import { join } from 'path';
import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuid } from 'uuid';

const usersFile = join(process.cwd(), 'src/data', 'users.json');

export async function POST(req: NextRequest) {
    const { email, password, username } = await req.json();

    if (!email || !password || !username) {
        return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const users = JSON.parse(await readFile(usersFile, 'utf-8'));

    if (users.find((u: any) => u.email === email)) {
        return NextResponse.json({ error: 'User already exists' }, { status: 409 });
    }

    const newUser = { id: uuid(), email, password, username };
    users.push(newUser);
    await writeFile(usersFile, JSON.stringify(users, null, 2));

    return NextResponse.json({
        message: 'User registered successfully', success: true, data: {
            user: newUser
        }
    });
}