const server = "vmess://eyJhZGQiOiI0OS4xMi4yMzAuMTY2IiwiYWlkIjoiMCIsImFscG4iOiIiLCJob3N0IjoiIiwiaWQiOiI2YjdjYmM0MS1mYjgwLTQxYTgtOGViNi1iNWJkYjBlODYxNDciLCJuZXQiOiJ0Y3AiLCJwYXRoIjoiIiwicG9ydCI6IjQ0MyIsInBzIjoiQGhhc2htYWt2cG4g2Kfar9mHINmC2LfYuSDYtNiv24wg2KjbjNinINin24zZhtis2KciLCJzY3kiOiJhdXRvIiwic25pIjoiIiwidGxzIjoiIiwidHlwZSI6Imh0dHAiLCJ2IjoiMiJ9";

function decode(b64) {
    const b = Buffer.from(b64, 'base64')
    const s = b.toString();
    return s;
}

function encode(str) {
    const b = Buffer.from(str);
    const s = b.toString('base64');
    return s;
}


const l = (data) => console.log(data);
const data = JSON.parse(decode(server.split("://")[1]));
data.ps = "https://discord.gg/rCf3ZZ6zMr"
console.log(encode(JSON.stringify(data)));