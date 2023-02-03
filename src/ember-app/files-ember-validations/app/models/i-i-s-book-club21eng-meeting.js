import {
  defineNamespace,
  defineProjections,
  Model as MeetingMixin
} from '../mixins/regenerated/models/i-i-s-book-club21eng-meeting';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(MeetingMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
