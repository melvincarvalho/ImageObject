#!/usr/bin/env bash

for i in {20220710..20220715} ; do getj http://json.rocks:5000/melbot_$i | jq -r '.bookmark[].image' ; done | jq -Rn '[inputs]' | spux > index.html