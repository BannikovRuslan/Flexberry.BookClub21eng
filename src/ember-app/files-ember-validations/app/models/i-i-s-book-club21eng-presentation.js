import {
  defineNamespace,
  defineProjections,
  Model as PresentationMixin
} from '../mixins/regenerated/models/i-i-s-book-club21eng-presentation';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(PresentationMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
