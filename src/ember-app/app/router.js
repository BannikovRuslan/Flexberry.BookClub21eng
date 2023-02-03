import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-book-club21eng-book-l');
  this.route('i-i-s-book-club21eng-book-e',
  { path: 'i-i-s-book-club21eng-book-e/:id' });
  this.route('i-i-s-book-club21eng-book-e.new',
  { path: 'i-i-s-book-club21eng-book-e/new' });
  this.route('i-i-s-book-club21eng-meeting-l');
  this.route('i-i-s-book-club21eng-meeting-e',
  { path: 'i-i-s-book-club21eng-meeting-e/:id' });
  this.route('i-i-s-book-club21eng-meeting-e.new',
  { path: 'i-i-s-book-club21eng-meeting-e/new' });
  this.route('i-i-s-book-club21eng-speaker-l');
  this.route('i-i-s-book-club21eng-speaker-e',
  { path: 'i-i-s-book-club21eng-speaker-e/:id' });
  this.route('i-i-s-book-club21eng-speaker-e.new',
  { path: 'i-i-s-book-club21eng-speaker-e/new' });
});

export default Router;
