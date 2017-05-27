#!/bin/bash

PROXY=proxy.conf.json
#IP='192.168.0.5'
IP=`ip addr list  |grep "inet " |cut -d' ' -f6|cut -d/ -f1 | tail -1`
PORT=3000

sed -e "s/IP/$IP/g" $PROXY.dist > $PROXY

node express.js $IP $PORT &
ng serve --host $IP --proxy-config $PROXY


