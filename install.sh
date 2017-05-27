#!/usr/bin/env bash
git pr && rm -rf node_modules/* && npm cache clean && npm install && ./start.sh