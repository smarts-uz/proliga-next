import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';

export async function POST(req) {
    try {
        const { base64Data, fileName, subFolderName,folderName } = await req.json();

        if (!base64Data || !fileName || !subFolderName||!folderName) {
            return new Response(
                JSON.stringify({ error: 'Invalid data provided' }),
                { status: 400 }
            );
        }
        
        const buffer = Buffer.from(base64Data, 'base64');
        const folderPath = join(process.cwd(), 'static/'+folderName, subFolderName);

        await mkdir(folderPath, { recursive: true });

        const filePath = join(folderPath, fileName);

        await writeFile(filePath, buffer);

        return new Response(
            JSON.stringify({
                message: 'File saved successfully',
                filePath: `/static/${folderName}/${subFolderName}/${fileName}`,
            }),
            { status: 201 }
        );
    } catch (error) {
        return new Response(
            JSON.stringify({ error: error.message }),
            { status: 500 }
        );
    }
}