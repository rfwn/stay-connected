const server = "vmess://eyJhZGQiOiI0OS4xMi4yMzAuMTY2IiwiYWlkIjoiMCIsImFscG4iOiIiLCJob3N0IjoiIiwiaWQiOiI2YjdjYmM0MS1mYjgwLTQxYTgtOGViNi1iNWJkYjBlODYxNDciLCJuZXQiOiJ0Y3AiLCJwYXRoIjoiIiwicG9ydCI6IjQ0MyIsInBzIjoiQGhhc2htYWt2cG4g2Kfar9mHINmC2LfYuSDYtNiv24wg2KjbjNinINin24zZhtis2KciLCJzY3kiOiJhdXRvIiwic25pIjoiIiwidGxzIjoiIiwidHlwZSI6Imh0dHAiLCJ2IjoiMiJ9";
const l = (data) => console.log(data);
const data = JSON.parse(atob(server.split("://")[1]));
data.ps = "https://discord.gg/rCf3ZZ6zMr"
btoa(JSON.stringify(data))