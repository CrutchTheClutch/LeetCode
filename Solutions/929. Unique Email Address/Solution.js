/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  let uniqueEmails = new Map();
  let count = 0;
  let current = '';
  for (let i = 0; i < emails.length; i++) {
    current = emails[i].match(/^[^+@]*/)[0].replace(/\./g, '');
    current += emails[i].match(/@.+/)[0];
    if (!uniqueEmails.has(current)) {
      uniqueEmails.set(current);
      count++;
    }
  }

  return count;
};
