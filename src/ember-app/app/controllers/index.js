import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.book-club21eng.caption'),
          title: i18n.t('forms.application.sitemap.book-club21eng.title'),
          children: [{
            link: 'i-i-s-book-club21eng-meeting-l',
            caption: i18n.t('forms.application.sitemap.book-club21eng.i-i-s-book-club21eng-meeting-l.caption'),
            title: i18n.t('forms.application.sitemap.book-club21eng.i-i-s-book-club21eng-meeting-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-book-club21eng-speaker-l',
            caption: i18n.t('forms.application.sitemap.book-club21eng.i-i-s-book-club21eng-speaker-l.caption'),
            title: i18n.t('forms.application.sitemap.book-club21eng.i-i-s-book-club21eng-speaker-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-book-club21eng-book-l',
            caption: i18n.t('forms.application.sitemap.book-club21eng.i-i-s-book-club21eng-book-l.caption'),
            title: i18n.t('forms.application.sitemap.book-club21eng.i-i-s-book-club21eng-book-l.title'),
            icon: 'file',
            children: null
          }]
        }
      ]
    };
  }),
})