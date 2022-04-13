#!/usr/bin/env sh
# abort on errors
set -e
# build
yarn run build
# navigate into the build output directory
cd dist
cp index.html 404.html
# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
git init
git add -A
git commit -m 'Деплой на gh-pages'
git push -f git@github.com:onexsan/admin-nfd.git master:gh-pages
cd -