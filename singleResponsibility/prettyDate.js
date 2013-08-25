// Responsibility of format as pretty date
var prettyDate = {
  format: function(date){
    var now = new Date();
    var diffInMiliSeconds = now.getTime() - date.getTime();
    var diffInSeconds = Math.ceil(diffInMiliSeconds / 1000);
    var diffInMinutes = Math.ceil(diffInSeconds / 60);
    var diffInHours = Math.ceil(diffInMinutes / 60);
    var diffInDays = Math.ceil(diffInHours / 24);
    var diffInWeeks = Math.ceil(diffInDays / 7);
    var diffInMonths = Math.ceil(diffInDays / 30);
    var diffInYears = Math.ceil(diffInDays / 365);
    var ago = diffInYears + "a";

    if (diffInMinutes == 1) {
      ago = "1min";
    } else if (diffInMinutes < 60) {
      ago = diffInMinutes + "min";
    } else if (diffInHours == 1) {
      ago = "1h";
    } else if (diffInHours < 24) {
      ago = diffInHours +"h";
    } else if (diffInDays == 1) {
      ago = "ayer";
    } else if (diffInDays <= 7) {
      ago = diffInDays +"d";
    } else if (diffInDays <= 30) {
      ago = diffInWeeks + "sem";
    } else if (diffInDays <= 365) {
      ago = diffInMonths + "m";
    }
    return ago;
  },
};
 