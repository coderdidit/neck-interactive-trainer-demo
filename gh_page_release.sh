#!/bin/sh

ind . -type f -not -name 'prepare_release.sh'-delete

cp build/* .
