import test from 'ava';

import greeting from './index';

test('should greet', t => {
	t.same(greeting(), 'Hello!');
});

test('should greet with name', t => {
	t.same(greeting('World'), 'Hello World!');
});
