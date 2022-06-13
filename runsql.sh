#!/bin/zsh
psql -d pgdb -U admin -f persons.sql
psql -d pgdb -U admin -f users.sql
