import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-book-club21eng-meeting-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-book-club21eng-presentation+speaker':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'firstName',
            required: true,
            relationName: 'speaker',
            projection: 'SpeakerL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-book-club21eng-presentation+book':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'title',
            required: true,
            relationName: 'book',
            projection: 'BookL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
