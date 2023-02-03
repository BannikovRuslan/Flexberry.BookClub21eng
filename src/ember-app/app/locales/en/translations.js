import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISBookClub21engBookLForm from './forms/i-i-s-book-club21eng-book-l';
import IISBookClub21engMeetingLForm from './forms/i-i-s-book-club21eng-meeting-l';
import IISBookClub21engSpeakerLForm from './forms/i-i-s-book-club21eng-speaker-l';
import IISBookClub21engBookEForm from './forms/i-i-s-book-club21eng-book-e';
import IISBookClub21engMeetingEForm from './forms/i-i-s-book-club21eng-meeting-e';
import IISBookClub21engSpeakerEForm from './forms/i-i-s-book-club21eng-speaker-e';
import IISBookClub21engBookModel from './models/i-i-s-book-club21eng-book';
import IISBookClub21engMeetingModel from './models/i-i-s-book-club21eng-meeting';
import IISBookClub21engPresentationModel from './models/i-i-s-book-club21eng-presentation';
import IISBookClub21engSpeakerModel from './models/i-i-s-book-club21eng-speaker';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-book-club21eng-book': IISBookClub21engBookModel,
    'i-i-s-book-club21eng-meeting': IISBookClub21engMeetingModel,
    'i-i-s-book-club21eng-presentation': IISBookClub21engPresentationModel,
    'i-i-s-book-club21eng-speaker': IISBookClub21engSpeakerModel
  },

  'application-name': 'Book club21eng',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Book club21eng',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Book club21eng',
          title: 'Book club21eng'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'book-club21eng': {
          caption: 'BookClub21eng',
          title: 'BookClub21eng',
          'i-i-s-book-club21eng-meeting-l': {
            caption: 'Meeting',
            title: ''
          },
          'i-i-s-book-club21eng-speaker-l': {
            caption: 'Speaker',
            title: ''
          },
          'i-i-s-book-club21eng-book-l': {
            caption: 'Book',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-book-club21eng-book-l': IISBookClub21engBookLForm,
    'i-i-s-book-club21eng-meeting-l': IISBookClub21engMeetingLForm,
    'i-i-s-book-club21eng-speaker-l': IISBookClub21engSpeakerLForm,
    'i-i-s-book-club21eng-book-e': IISBookClub21engBookEForm,
    'i-i-s-book-club21eng-meeting-e': IISBookClub21engMeetingEForm,
    'i-i-s-book-club21eng-speaker-e': IISBookClub21engSpeakerEForm
  },

});

export default translations;
