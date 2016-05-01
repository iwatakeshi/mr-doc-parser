'use strict';
const _ = require('lodash');
const synonyms = require('./synonyms.js');
class Utils {
  /**
   * Normalize the comment tags.
   * @param {Array} - The comment to normalize.
   * @return {Array} - The comment containing normalized tags.
   */
  static normalize(comment) {
    return _.assignIn({}, comment, {
      tags: comment.tags.map(tag => {
        let title = tag.title.toLowerCase();
        const canonical = synonyms[title];
        if (!canonical) {
          switch (title[0]) {
            case 'e':
              if (title === 'extend') title = 'extends';
              break;
            case 'j':
              if (title === 'jsfiddles') title = 'jsfiddle';
              break;
            default: break;
          }
        }
        return canonical ? _.extend({}, tag, { title: canonical }) : tag;
      }),
    });
  }
}

module.exports = Utils;
