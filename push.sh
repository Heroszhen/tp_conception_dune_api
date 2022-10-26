#! /bin/bash
#push to github

git add -A 
git commit -m "$1"
git push origin zhen

git add -A
git commit -m "$1"
git checkout dev
git merge zhen
git push origin dev

git add -A 
git commit -m "$1"
git checkout master
git merge zhen
git push origin master