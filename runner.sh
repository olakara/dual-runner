#!/bin/bash

# Start the first process
./node service-one.js &

# Start the second process
./node service-two.js &

# Wait for any process to exit
wait -n

# Exit with status of process that exited first
exit $?
