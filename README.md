# Greet

[![Build Status][travis-image]][travis-url]
[![Dependency Status][depstat-image]][depstat-url]
[![DevDependency Status][depstat-dev-image]][depstat-dev-url]
[![XO code style][codestyle-image]][codestyle-url]

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
xo --init --esnext
wget https://raw.githubusercontent.com/sindresorhus/xo/master/.editorconfig
ga .
gc -am "Init xo"
npm i -D husky
ga .
gc -m "Add precommit hook"
npm i -g yo generator-travis
yo travis
git remote add origin git@github.com:VovanR/greet.git
git push -u origin master
```

[travis-url]: https://travis-ci.org/VovanR/greet
[travis-image]: http://img.shields.io/travis/VovanR/greet.svg

[depstat-url]: https://david-dm.org/VovanR/greet
[depstat-image]: https://david-dm.org/VovanR/greet.svg?style=flat-square

[depstat-dev-url]: https://david-dm.org/VovanR/greet
[depstat-dev-image]: https://david-dm.org/VovanR/greet/dev-status.svg?style=flat-square

[codestyle-url]: https://github.com/sindresorhus/xo
[codestyle-image]: https://img.shields.io/badge/code_style-XO-5ed9c7.svg?style=flat-square
