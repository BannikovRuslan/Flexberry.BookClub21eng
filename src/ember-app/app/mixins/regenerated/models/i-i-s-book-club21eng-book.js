import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  author: DS.attr('string'),
  cover: DS.attr('string'),
  description: DS.attr('string'),
  pages: DS.attr('number'),
  rating: DS.attr('decimal'),
  tags: DS.attr('string'),
  title: DS.attr('string')
});

export let ValidationRules = {
  author: {
    descriptionKey: 'models.i-i-s-book-club21eng-book.validations.author.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  cover: {
    descriptionKey: 'models.i-i-s-book-club21eng-book.validations.cover.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  description: {
    descriptionKey: 'models.i-i-s-book-club21eng-book.validations.description.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  pages: {
    descriptionKey: 'models.i-i-s-book-club21eng-book.validations.pages.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  rating: {
    descriptionKey: 'models.i-i-s-book-club21eng-book.validations.rating.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  tags: {
    descriptionKey: 'models.i-i-s-book-club21eng-book.validations.tags.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  title: {
    descriptionKey: 'models.i-i-s-book-club21eng-book.validations.title.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('BookE', 'i-i-s-book-club21eng-book', {
    title: attr('Title', { index: 0 }),
    author: attr('Author', { index: 1 }),
    pages: attr('Pages', { index: 2 }),
    cover: attr('Cover', { index: 3 }),
    tags: attr('Tags', { index: 4 }),
    description: attr('Description', { index: 5 }),
    rating: attr('Rating', { index: 6 })
  });

  modelClass.defineProjection('BookL', 'i-i-s-book-club21eng-book', {
    title: attr('Title', { index: 0 }),
    author: attr('Author', { index: 1 }),
    pages: attr('Pages', { index: 2 }),
    cover: attr('Cover', { index: 3 }),
    tags: attr('Tags', { index: 4 }),
    description: attr('Description', { index: 5 }),
    rating: attr('Rating', { index: 6 })
  });
};
