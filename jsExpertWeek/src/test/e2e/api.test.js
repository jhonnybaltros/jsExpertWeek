import { jest, expect, test, describe } from '@jest/globals';

import superTest from 'supertest';
import Server from '../../server.js';


describe('API E2E Test Suite', () => {
    test('GET / should return an array', async() => {
        const response = await superTest(Server)
        .get('/');
        const data = JSON.parse(response.text);
        expect(data).toBeInstanceOf(Array);
    })
    test('POST / should save an intem and return ok', async() => {
        const response = await superTest(Server)
        .post('/')
        .send({
            name: 'Jhonny Baltros',
            age: 27
        });
        const expectedResponse = JSON.stringify({ ok: 1 })
        expect(response.text).toStrictEqual(expectedResponse);
    })
    test.todo('DELETE / should save an item and return ok')
})