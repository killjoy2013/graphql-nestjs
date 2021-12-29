#!/bin/sh -eu
echo "starting docker entrypoint" >&1
npm run migration:run
node /tmp/dist/main
echo "express started" >&1
