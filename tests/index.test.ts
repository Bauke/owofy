import test from 'ava';

import owofy, {faces} from '../source/index.js';

test('Owofy', (t) => {
  t.is(typeof owofy, 'function');

  const owofied = owofy('Lorem ipsum dolor sit amet.');
  t.snapshot(owofied, 'Lorem ipsum example');

  const nya = owofy('Nine BANANA banana');
  t.snapshot(nya, 'Nya example');
});

test('Faces', (t) => {
  const owofied = owofy('Hey!!');
  t.true(faces.length > 0);
  t.true(faces.some((face) => owofied.includes(face)));
  t.true(owofied.includes('! '));
});
