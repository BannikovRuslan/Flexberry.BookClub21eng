import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  date: DS.attr('date'),
  rating: DS.attr('number'),
  review: DS.attr('string'),
  uRLPresentation: DS.attr('string'),
  uRLVideo: DS.attr('string'),
  book: DS.belongsTo('i-i-s-book-club21eng-book', { inverse: null, async: false }),
  speaker: DS.belongsTo('i-i-s-book-club21eng-speaker', { inverse: null, async: false }),
  meeting: DS.belongsTo('i-i-s-book-club21eng-meeting', { inverse: 'presentation', async: false })
});

export let ValidationRules = {
  date: {
    descriptionKey: 'models.i-i-s-book-club21eng-presentation.validations.date.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  rating: {
    descriptionKey: 'models.i-i-s-book-club21eng-presentation.validations.rating.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  review: {
    descriptionKey: 'models.i-i-s-book-club21eng-presentation.validations.review.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  uRLPresentation: {
    descriptionKey: 'models.i-i-s-book-club21eng-presentation.validations.uRLPresentation.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  uRLVideo: {
    descriptionKey: 'models.i-i-s-book-club21eng-presentation.validations.uRLVideo.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  book: {
    descriptionKey: 'models.i-i-s-book-club21eng-presentation.validations.book.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  speaker: {
    descriptionKey: 'models.i-i-s-book-club21eng-presentation.validations.speaker.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  meeting: {
    descriptionKey: 'models.i-i-s-book-club21eng-presentation.validations.meeting.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('PresentationE', 'i-i-s-book-club21eng-presentation', {
    date: attr('Date', { index: 0 }),
    rating: attr('Rating', { index: 1 }),
    uRLPresentation: attr('U r l presentation', { index: 2 }),
    uRLVideo: attr('U r l video', { index: 3 }),
    review: attr('Review', { index: 4 }),
    speaker: belongsTo('i-i-s-book-club21eng-speaker', 'Speaker', {
      firstName: attr('First name', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'firstName' }),
    book: belongsTo('i-i-s-book-club21eng-book', 'Book', {
      title: attr('Title', { index: 8, hidden: true })
    }, { index: 7, displayMemberPath: 'title' })
  });
};
