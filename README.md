# Greet

> Hello World!

## Logs
Goto [GitHub](https://github.com/new) and add new "greet" repository
```
mkdir greet && cd $_
git init
vim index.js
vim test.js
ga .
gc -m "Init"
npm init
gc -m "Init package"
npm i -g ava
ava --init
gc -am "Init ava"
npm i -g xo
xo --init
wget https://raw.githubusercontent.com/sindresorhus/xo/master/.editorconfig
ga .
gc -am "Init xo"
npm i -D husky
ga .
gc -m "Add precommit hook"
git remote add origin git@github.com:VovanR/greet.git
git push -u origin master
```
