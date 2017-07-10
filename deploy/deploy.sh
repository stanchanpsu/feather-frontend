#!/usr/bin/env bash
~/.local/bin/aws s3 rm s3://feather-frontend --recursive
~/.local/bin/aws s3 cp dist s3://feather-frontend --recursive