const { property } = require("lodash");

describe('GET checkings', () => {
    test('test[1] - Checking TODOS keys response', async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    
    const expectedKeys = ['userId', 'id', 'title', 'completed'];
    
    expect(response.status).toBe(200);

    expectedKeys.forEach(key =>{
        expect(data).toHaveProperty(key);
    });
    });

    test('test[2] - Checking /posts key types', async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    
    expect(typeof(data.userId)).toBe('number');
    expect(typeof(data.id)).toBe('number');
    expect(typeof(data.title)).toBe('string');
    expect(typeof(data.body)).toBe('string');
    });

    test('test[3] - Checking postId values of userId properties', async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1');
    const data = await response.json();

    data.forEach(value =>{
        expect(value.postId).toBe(1);
    })
    });

    test('test[4] - Check creating a post with correct input data', async() =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts',
    {
        method: 'POST',
        body: JSON.stringify({
          title: 'test_3_title',
          body: 'test_3_body',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })

    expect(response.ok).toBe(true);
    expect(response.statusText).toEqual('Created');
    });

    test('test[5] - Updating ...post/1 with PUT request and correct data URL', async() =>{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1',
        {
            method: 'PUT',
            body: JSON.stringify({
              title: 'test_5',
              body: 'test_5',
              userId: 'test_5',
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
        
        expect(response.ok).toBe(true);
        expect(response.statusText).toEqual('OK');
    });

    test('test[6] - Checking 404 error with incorrect POST request method on .../posts/1', async() =>{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1',
        {
            method: 'POST',
            body: JSON.stringify({
              title: 'test_6',
              body: 'test_6',
              userId: 'test_6',
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
        
        expect(response.status).toEqual(404);
        expect(response.statusText).toEqual('Not Found');
    });
})