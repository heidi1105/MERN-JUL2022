# Welcome to the MERN stack with Heidi/Max

## Instructions
1. Clone the repo to your computer
2. Pull the repo when you want to get the latest update of the code

## To kill a running port

MAC
```
lsof -i:8000 — getting the background process
kill -9 <PID>
```


Windows
```
netstat -ano | findstr :8000
taskkill /PID <PID> /F
```