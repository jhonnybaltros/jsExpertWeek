import { once } from 'events';
import { createServer } from 'http';
import { randomUUID } from 'crypto';

const Database = new Map()

function respondJSON(data, response) {
    return response.end(JSON.stringify(data))
}

async function handler(request, response) {
    const { method } = request

    if (method === 'GET') {

        return respondJSON([...Database.values()], response)
        
    }

    if (method === 'POST') {
        const id = randomUUID();
        const body = JSON.parse(await once(request, 'data'))
        Database.set(id, body)
        console.log('got it', body)
        return respondJSON({ ok: 1 }, response)
    }

    if (method === 'DELETE') {
        Database.clear()
        return respondJSON({ ok: 1 }, response)
    }
}

export default createServer(handler);