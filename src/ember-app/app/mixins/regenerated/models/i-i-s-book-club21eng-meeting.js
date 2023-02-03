import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  date: DS.attr('date'),
  presentation: DS.hasMany('i-i-s-book-club21eng-presentation', { inverse: 'meeting', async: false })
});

export let ValidationRules = {
  date: {
    descriptionKey: 'models.i-i-s-book-club21eng-meeting.validations.date.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  presentation: {
    descriptionKey: 'models.i-i-s-book-club21eng-meeting.validations.presentation.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('MeetingE', 'i-i-s-book-club21eng-meeting', {
    date: attr('Date', { index: 0 }),
    presentation: hasMany('i-i-s-book-club21eng-presentation', 'Presentation', {
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
    })
  });

  modelClass.defineProjection('MeetingL', 'i-i-s-book-club21eng-meeting', {
    date: attr('Date', { index: 0 })
  });
};
