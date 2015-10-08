'use strict';

var mongooseSoftDelete = function (schema, options) {
  // default options
  if (typeof options !== 'object') {
    options = { select: true };
  }

  // add fields
  schema.add({ deleted: { type: Boolean, default: false, select: options.select }});
  schema.add({ deletedAt: { type: Date, default: null, select: options.select }});

  // delete
  schema.methods.softDelete = function *() {
    if (!this.deleted) {
      this.deleted = true;
      this.deletedAt = new Date();
      yield this.save();
    }
  };

  // hide fields
  if (!options.select) {
    if (!schema.options.toJSON) schema.options.toJSON = {};
    let previousTransformation = schema.options.toJSON.transform || function() {};
    schema.options.toJSON.transform = (doc, ret, opts) => {
      delete ret.deleted;
      delete ret.deletedAt;
      previousTransformation(doc, ret, opts);
    };
  }
};

module.exports = mongooseSoftDelete;
