/* eslint-disable @typescript-eslint/no-explicit-any */
import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import { NextRequest, NextResponse } from 'next/server';

const postsFile = join(process.cwd(), 'src/data', 'articles.json');

export async function DELETE(_: NextRequest, { params }: { params: { id: string } }) {
  console.log('params is',params);
  
  const posts = JSON.parse(await readFile(postsFile, 'utf-8'));
  const filtered = posts.filter((p: any) => p.id !== params.id);

  if (filtered.length === posts.length) {
    return NextResponse.json({ error: 'Post not found' }, { status: 404 });
  }

  await writeFile(postsFile, JSON.stringify(filtered, null, 2));
  return NextResponse.json({ message: 'Post deleted', success: true, data: {} });
}


export async function GET(_: NextRequest, { params }: { params: { id: string } }) {
  const articles = JSON.parse(await readFile(postsFile, 'utf-8'));
  const article = articles?.find((p: any) => p.id === params.id);



  if (!article) {
    return NextResponse.json({ error: 'Post not found' }, { status: 404 });
  }

  return NextResponse.json({
    success: true,
    data: {
      article
    }
  });
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const body = await req.json();
  const posts = JSON.parse(await readFile(postsFile, 'utf-8'));

  const index = posts.findIndex((p: any) => p.id === params.id);
  if (index === -1) {
    return NextResponse.json({ error: 'Post not found' }, { status: 404 });
  }

  posts[index] = {
    ...posts[index],
    ...body,
    id: params.id,
  };

  await writeFile(postsFile, JSON.stringify(posts, null, 2));

  return NextResponse.json({
    success: true,
    data: {
      article: posts[index],
    },
  })
}