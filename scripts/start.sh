#!/bin/bash
cd /home/ec2-user/depTest
pm2 stop all
pm2 start ecosystem.config.js
pm2 save