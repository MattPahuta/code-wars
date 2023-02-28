// *** Holiday III - Fire on the boat - 7 kyu
/*
Enjoying your holiday, you head out on a scuba diving trip!

Disaster!! The boat has caught fire!!

You will be provided a string that lists many boat related items. If any of these items are "Fire" you must spring into action. Change any instance of "Fire" into "~~". Then return the string.

*/
function fireFight(str) {
  // with a RegEx
  return str.replace(/Fire/g, `~~`);

  // with replaceAll
  return str.replaceAll('Fire', '~~');
}