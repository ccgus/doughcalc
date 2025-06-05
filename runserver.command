#!/bin/bash

SCRIPT_DIR=`cd "${0%/*}"; pwd`

echo "$SCRIPT_DIR"

cd "$SCRIPT_DIR"

(sleep 1; open "http://localhost:8000") &

python3 -m http.server 8000
