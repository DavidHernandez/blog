#!/bin/sh

PROJECT_NAME = "blog-node"

# Create tmux session.
tmux new-session -d -s $PROJECT_NAME

# Creates a new window that starts the container with the Node log.
tmux send-keys -t $PROJECT_NAME:0 "docker-compose up" C-m
tmux rename-window 'log'

# Creates a new window with vim opened with the source of the app.
tmux new-window -t $PROJECT_NAME:1 -n "code" ;
tmux new-window -t $PROJECT_NAME:1 -n "code" "vi src/"

# Selects the window with the code as default.
tmux select-window -t $PROJECT_NAME:1

# Attachs the tmux session.
tmux -2 attach-session -t $PROJECT_NAME
