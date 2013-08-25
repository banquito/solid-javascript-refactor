test("pretty date to 1 min ago", function() {
  var timeAgo = new Date();
  timeAgo.setMinutes(timeAgo.getMinutes() - 1);
  equal(prettyDate.format(timeAgo), "1min");
});

test("pretty date to 2 min ago", function() {
  var timeAgo = new Date();
  timeAgo.setMinutes(timeAgo.getMinutes() - 2);
  equal(prettyDate.format(timeAgo), "2min");
});

test("pretty date to 1 hour ago", function() {
  var timeAgo = new Date();
  timeAgo.setHours(timeAgo.getHours() - 1);
  equal(prettyDate.format(timeAgo), "1h");
});

test("pretty date 90 min ago to 2 hour ago", function() {
  var timeAgo = new Date();
  timeAgo.setMinutes(timeAgo.getMinutes() - 90);
  equal(prettyDate.format(timeAgo), "2h");
});

test("pretty date 24h ago to ayer", function() {
  var timeAgo = new Date();
  timeAgo.setHours(timeAgo.getHours() - 24);
  equal(prettyDate.format(timeAgo), "ayer");
});

test("pretty date 36h ago to 2d", function() {
  var timeAgo = new Date();
  timeAgo.setHours(timeAgo.getHours() - 36);
  equal(prettyDate.format(timeAgo), "2d");
});

test("pretty date 8d ago to 2 semanas", function() {
  var timeAgo = new Date();
  timeAgo.setDate(timeAgo.getDate() - 8);
  equal(prettyDate.format(timeAgo), "2sem");
});

test("pretty date 31d ago to 2 meses", function() {
  var timeAgo = new Date();
  timeAgo.setDate(timeAgo.getDate() - 31);
  equal(prettyDate.format(timeAgo), "2m");
});

test("pretty date 370d ago to 2 años", function() {
  var timeAgo = new Date();
  timeAgo.setDate(timeAgo.getDate() - 370);
  equal(prettyDate.format(timeAgo), "2a");
});
