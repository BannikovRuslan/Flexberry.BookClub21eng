import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  firstName: DS.attr('string'),
  foto: DS.attr('string'),
  lastName: DS.attr('string'),
  middleName: DS.attr('string')
});

export let ValidationRules = {
  firstName: {
    descriptionKey: 'models.i-i-s-book-club21eng-speaker.validations.firstName.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  foto: {
    descriptionKey: 'models.i-i-s-book-club21eng-speaker.validations.foto.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  lastName: {
    descriptionKey: 'models.i-i-s-book-club21eng-speaker.validations.lastName.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  middleName: {
    descriptionKey: 'models.i-i-s-book-club21eng-speaker.validations.middleName.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('SpeakerE', 'i-i-s-book-club21eng-speaker', {
    firstName: attr('First name', { index: 0 }),
    lastName: attr('Last name', { index: 1 }),
    middleName: attr('Middle name', { index: 2 }),
    foto: attr('Foto', { index: 3 })
  });

  modelClass.defineProjection('SpeakerL', 'i-i-s-book-club21eng-speaker', {
    firstName: attr('First name', { index: 0 }),
    lastName: attr('Last name', { index: 1 }),
    middleName: attr('Middle name', { index: 2 }),
    foto: attr('Foto', { index: 3 })
  });
};
