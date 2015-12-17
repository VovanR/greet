import test from 'ava';

import greeting from './index';

test('should greet', function (t) {
	t.same(greeting(), 'Hello!');
});

test('should greet with name', function (t) {
	t.same(greeting('World'), 'Hello World!');
});
