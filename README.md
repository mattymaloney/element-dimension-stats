# element-dimension-stats
Get height, width, margin, padding, border, and box-model stats for a specified element (typically the first element in the collection returned by a given query selector).

Right now, this elementary implemenetation just creates a global variable (dimStats) which provided 3 functions to calculate the stats (calc), convert the stats to readable HTML (toHTML), and to inject the stats' HTML into the page (show).

Basic usage:

dimStats.show('.margins', '.stats');

where 

* '.margins' is the element whose stats you want to measure/calculate.
* '.stats' is the element in which the stats' HTML should be injected.

Code-usable raw file reference:
https://rawgit.com/mattymaloney/element-dimension-stats/master/dim-stats.js

