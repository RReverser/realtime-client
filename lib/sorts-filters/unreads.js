'use strict';

exports.filter = function unreadsFilter(room) {
  return !!room.unreadItems;
};

exports.sort = function unreadsSort(model) {
  return model.lastAccessTime;
};
