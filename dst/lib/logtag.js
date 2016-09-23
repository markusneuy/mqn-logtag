'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var RED = '\x1b[31;1m';
var GREEN = '\x1b[32;1m';
var BLUE = '\x1b[34;1m';
var LIGHT_BLUE = '\x1b[36;1m';
var ORANGE = '\x1b[33;1m';
var PINK = '\x1b[35;1m';

var END = '\x1b[0m';

/**
 * This module exports helpers to create colored strings for logging.
 * This uses ANSI escape sequences.
 * @author Markus Neuy
 * @module LogTag
 * @since 23.09.2016
 */
exports.default = Object.create({
    /**
     * Turns a message into a console-log-string to indicate an error.
     * The color will be red
     * @param {Array} strings Template base strings
     * @param {...*} values Values of the template
     * @returns {String} The error-message string
     */
    error: function error(strings) {
        for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            values[_key - 1] = arguments[_key];
        }

        return RED + 'ERROR:    ' + concatTemplateString(strings, values) + ' ' + END;
    },
    /**
     * Turns a message into a console-log-string to indicate a done.
     * The color will be green
     * @param {Array} strings Template base strings
     * @param {...*} values Values of the template
     * @returns {String} The done-message string
     */
    done: function done(strings) {
        for (var _len2 = arguments.length, values = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            values[_key2 - 1] = arguments[_key2];
        }

        return GREEN + 'DONE:     ' + concatTemplateString(strings, values) + ' ' + END;
    },
    /**
     * Turns a message into a console-log-string to indicate a note.
     * The color will be magenta
     * @param {Array} strings Template base strings
     * @param {...*} values Values of the template
     * @returns {String} The note-message string
     */
    note: function note(strings) {
        for (var _len3 = arguments.length, values = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
            values[_key3 - 1] = arguments[_key3];
        }

        return BLUE + 'NOTE:     ' + concatTemplateString(strings, values) + ' ' + END;
    },
    /**
     * Turns a message into a console-log-string to indicate a request.
     * The color will be cyan
     * @param {Array} strings Template base strings
     * @param {...*} values Values of the template
     * @returns {String} The request-message string
     */
    request: function request(strings) {
        for (var _len4 = arguments.length, values = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
            values[_key4 - 1] = arguments[_key4];
        }

        return LIGHT_BLUE + 'REQUEST:  ' + concatTemplateString(strings, values) + ' ' + END;
    },
    /**
     * Turns a message into a console-log-string to indicate a warning.
     * The color will be yellow
     * @param {Array} strings Template base strings
     * @param {...*} values Values of the template
     * @returns {String} The warning-message string
     */
    warning: function warning(strings) {
        for (var _len5 = arguments.length, values = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
            values[_key5 - 1] = arguments[_key5];
        }

        return ORANGE + 'WARNING:  ' + concatTemplateString(strings, values) + ' ' + END;
    },
    /**
     * Turns a message into a console-log-string to indicate something critical.
     * The color will be pink
     * @param {Array} strings Template base strings
     * @param {...*} values Values of the template
     * @returns {String} The critical-message string
     */
    critical: function critical(strings) {
        for (var _len6 = arguments.length, values = Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
            values[_key6 - 1] = arguments[_key6];
        }

        return PINK + 'CRITICAL: ' + concatTemplateString(strings, values) + ' ' + END;
    }
});

/**
 * A Helper-Function to concatenate the strings inside a tag function.
 * If there is an error inside of the values array the stack-trace will be
 * appended.
 * @param {Array} strings Template base strings
 * @param {...*} values Values of the template
 * @returns {String} The concatenated string
 */

function concatTemplateString(strings, values) {
    //let traces = '';

    var traces = values.map(function (val) {
        return val instanceof Error ? '\n' + val.stack : '';
    }).join('');
    var result = strings.reduce(function (prev, curr, i) {
        return '' + prev + values[i - 1].toString() + curr;
    });
    return '' + result + traces;

    /*return (strings.reduce((prev, curr, i) => {
        const val = values[i-1];
        if (val instanceof Error) {
            traces += `\n${val.stack}`;
        }
        return `${prev}${val.toString()}${curr}`;
    })) + traces;*/
}