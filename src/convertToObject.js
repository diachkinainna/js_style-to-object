'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString.split(';');

  return styles
    .map((item) => item.split(':'))
    .reduce((result, b) => {
      if (b[1]) {
        result[b[0].trim()] = b[1].trim();
      }

      return result;
    }, {});
}

module.exports = convertToObject;
