/* eslint-disable @typescript-eslint/no-explicit-any */
import { readFile } from 'fs/promises';
import { join } from 'path';
import { NextRequest, NextResponse } from 'next/server';


const usersFile = join(process.cwd(), 'src/data', 'users.json');

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  const users = JSON.parse(await readFile(usersFile, 'utf-8'));
  const user = users.find((u: any) => u.email === email && u.password === password);

  if (!user) return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });

  return NextResponse.json({ message: 'Login successful', success: true, data: { user, token: 'arvan-token' } });
}
