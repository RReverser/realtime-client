'use strict';

function unreadsFilter(room) {
  return !!room.unreadItems;
}

function unreadsSort(model) {
  return model.lastAccessTime;
}