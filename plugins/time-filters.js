import Vue from "vue";
import { formatDistanceToNow } from "date-fns";

Vue.filter("publishedTimeToNow", date => {
  return `${formatDistanceToNow(new Date(date), {
    addSuffix: true
  })} ago`;
});

Vue.filter("commentTimeToNow", date => {
  const timeElapsed = formatDistanceToNow(
    new Date(date),
    { addSuffix: true },
    {
      includeSeconds: true
    }
  );
  return `${timeElapsed} ago`;
});
