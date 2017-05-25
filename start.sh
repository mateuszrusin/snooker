#!/bin/bash

IP=`ip addr list  |grep "inet " |cut -d' ' -f6|cut -d/ -f1 | tail -1`

node express.js &
ng serve --host $IP


