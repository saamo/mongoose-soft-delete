'use strict';

var mongooseSoftDelete = function (schema) {
  // add fields
  schema.add({ deleted: { type: Boolean, default: false }});
  schema.add({ deletedAt: { type: Date, default: null }});

  // delete
  schema.methods.softDelete = function *() {
    if (!this.deleted) {
      this.deleted = true;
      this.deletedAt = new Date();
      yield this.save();
    }
  };
};

module.exports = mongooseSoftDelete;
