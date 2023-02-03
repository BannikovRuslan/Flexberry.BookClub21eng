import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-book-club21eng-speaker', 'Unit | Model | i-i-s-book-club21eng-speaker', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-book-club21eng-book',
    'model:i-i-s-book-club21eng-meeting',
    'model:i-i-s-book-club21eng-presentation',
    'model:i-i-s-book-club21eng-speaker',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
