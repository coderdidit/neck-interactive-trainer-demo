#!/bin/sh

find . -type f -not -name 'prepare_release.sh'-delete

cp build/* .
