import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import { NextResponse } from 'next/server';

const tagsFile = join(process.cwd(), 'src/data', 'tags.json');

export async function GET() {
    const tags = JSON.parse(await readFile(tagsFile, 'utf-8'));
    return NextResponse.json({
        success: true,
        data: {
            tags
        }
    });
}


export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { tag } = body;

        if (!tag || typeof tag !== 'string') {
            return NextResponse.json({ success: false, message: 'Tag is required and must be a string' }, { status: 400 });
        }

        const tags = JSON.parse(await readFile(tagsFile, 'utf-8'));

        if (tags.includes(tag)) {
            return NextResponse.json({ success: false, message: 'Tag already exists' }, { status: 409 });
        }

        tags.push(tag);
        await writeFile(tagsFile, JSON.stringify(tags, null, 2), 'utf-8');

        return NextResponse.json({
            success: true,
            message: 'Tag added successfully',
            data: { tags },
        });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
    }
}