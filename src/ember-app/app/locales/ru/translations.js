import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Book club21eng',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Book club21eng',
          title: 'Book club21eng'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
