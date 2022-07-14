# Welcome to the MERN stack with Heidi/Max

## Instructions
1. Clone the repo to your computer
2. Pull the repo when you want to get the latest update of the code

## To kill a running port

Mac/Linux

Run 
```
lsof -i:8000 
```
to getting the background process and find the PID

```
kill -9 <PID>
```
Replace <PID> to the PID you found on the last command


Windows
```
netstat -ano | findstr :8000
taskkill /PID <PID> /F
```