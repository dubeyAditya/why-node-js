#!/bin/zsh
PIDS=$(ps -ef | grep ipc.js | awk '{print $2}');
read -r PID <<<${PIDS};
kill -s SIGUSR1 ${PID}
