#!/bin/sh

PROJECT_NAME="blog-node"

# Create tmux session.
tmux new-session -d -s $PROJECT_NAME

# Creates a new window that starts the container with the Node log.
tmux send-keys -t $PROJECT_NAME:0 "docker-compose up" C-m
tmux rename-window 'log'

# Creates a new window with vim opened with the source of the app.
tmux new-window -t $PROJECT_NAME:1 -n "code" ;
tmux send-keys -t $PROJECT_NAME:1 "vi src/" C-m

tmux new-window -t $PROJECT_NAME:2 -n "elm" ;
i,
# Export the alias elm that really uses a Docker container.
tmux send-keys -t $PROJECT_NAME:2 "alias elm='docker run -it --rm -v \"$(pwd):/code\" -w \"/code\" -e \"HOME=/tmp\" -u $UID:$GID -p 8000:8000 codesimple/elm:0.17'" C-m
# Call elm alias once to ensure the container is ready.
tmux send-keys -t $PROJECT_NAME:2 "elm" C-m

# Selects the window with the code as default.
tmux select-window -t $PROJECT_NAME:1

# Attachs the tmux session.
tmux -2 attach-session -t $PROJECT_NAME
