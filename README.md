# Setup

1. Allow known local hosts as follows:
    1. 127.0.0.1 crm.localhost
    2. 127.0.0.1 crm.api.localhost
    3. 127.0.0.1 crm.db.localhost
2. Linux/Mac ``sudo nano /etc/hosts
3. Windows: C:\Windows\System32\Drivers\etc open hosts

# Running
1. docker compose -f docker.compose.dev up --build

# Project Structure
 - client -> vite client idk
 - server -> go server/api. Routes found in routes.go
