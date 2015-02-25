'use strict';

function natural(a, b) {
  if (a === b) return 0;
  return a > b ? 1 : -1;
}

exports.sort = function favouritesSort(a, b) {
  var isDifferent = natural(a.favourite, b.favourite);

  if (isDifferent) return isDifferent; // -1 or 1

  // both favourites of the same rank, order by name
  return natural(a.name, b.name);
};

exports.filter = function favouritesFilter(room) {
  return !!room.favourite;
};