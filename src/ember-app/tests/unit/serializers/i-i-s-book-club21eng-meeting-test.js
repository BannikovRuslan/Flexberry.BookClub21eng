import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-book-club21eng-meeting', 'Unit | Serializer | i-i-s-book-club21eng-meeting', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-book-club21eng-meeting',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
