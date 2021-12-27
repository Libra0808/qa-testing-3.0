var list = document.getElementById('sort-list'),
   sll = document.getElementById('shared-list-left'),
   slr = document.getElementById('shared-list-right'),
   grid = document.getElementById('sort-grid');

new Sortable(list, {
   animation: 150,
   ghostClass: 'blue-background-class'
});

new Sortable(sll, {
   group: 'shared', // set both lists to same group
   animation: 150
});

new Sortable(slr, {
   group: 'shared',
   animation: 150
});

new Sortable(grid, {
   animation: 150,
   ghostClass: 'blue-background-class'
});

var nestedSortables = [].slice.call(document.querySelectorAll('.nested-sortable'));

for (var i = 0; i < nestedSortables.length; i++) {
   new Sortable(nestedSortables[i], {
      group: 'nested',
      animation: 150,
      fallbackOnBody: true,
      swapThreshold: 0.65
   });
}
