import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuid } from 'uuid';

const postsFile = join(process.cwd(), 'src/data', 'articles.json');

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    console.log('token', request.headers.get('authorization'));

    const page = parseInt(searchParams.get('page') || '1', 10);
    const limit = parseInt(searchParams.get('limit') || '10', 10);

    const posts = JSON.parse(await readFile(postsFile, 'utf-8'));

    const total = posts.length;

    const start = (page - 1) * limit;
    const end = start + limit;

    const paginatedPosts = posts.slice(start, end);

    return NextResponse.json({
        success: true,
        data: {
            meta: {
                page,
                limit,
                total,
                totalPages: Math.ceil(total / limit)
            },
            articles: paginatedPosts
        }
    });
}

export async function POST(req: NextRequest) {
    const { title, description, body } = await req.json();

    if (!title || !description || !body) return NextResponse.json({ error: 'Missing fields' }, { status: 400 });

    const posts = JSON.parse(await readFile(postsFile, 'utf-8'));
    const newPost = { id: uuid(), title, content: description, tags: [], created_at: new Date().toISOString() };

    posts.push(newPost);
    await writeFile(postsFile, JSON.stringify(posts, null, 2));

    return NextResponse.json({
        message: 'Post added successfully',
        success: true,
        data: {
            newPost
        }
    });
}