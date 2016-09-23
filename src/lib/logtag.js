'use strict';

const RED = '\x1b[31;1m';
const GREEN = '\x1b[32;1m';
const BLUE = '\x1b[34;1m';
const LIGHT_BLUE = '\x1b[36;1m';
const ORANGE = '\x1b[33;1m';
const PINK = '\x1b[35;1m';

const END = '\x1b[0m';

/**
 * This module exports helpers to create colored strings for logging.
 * This uses ANSI escape sequences.
 * @author Markus Neuy
 * @module logtag
 * @since 23.09.2016
 */
export default Object.create({
    /**
     * Turns a message into a console-log-string to indicate an error.
     * The color will be red
     * @param {Array} strings Template base strings
     * @param {...*} values Values of the template
     * @returns {String} The error-message string
     */
    error: function (strings, ...values) {
        return `${RED}ERROR:    ${concatTemplateString(strings, values)} ${END}`;
    },
    /**
     * Turns a message into a console-log-string to indicate a done.
     * The color will be green
     * @param {Array} strings Template base strings
     * @param {...*} values Values of the template
     * @returns {String} The done-message string
     */
    done : function (strings, ...values) {
        return `${GREEN}DONE:     ${concatTemplateString(strings, values)} ${END}`;
    },
    /**
     * Turns a message into a console-log-string to indicate a note.
     * The color will be magenta
     * @param {Array} strings Template base strings
     * @param {...*} values Values of the template
     * @returns {String} The note-message string
     */
    note : function (strings, ...values) {
        return `${BLUE}NOTE:     ${concatTemplateString(strings, values)} ${END}`;
    },
    /**
     * Turns a message into a console-log-string to indicate a request.
     * The color will be cyan
     * @param {Array} strings Template base strings
     * @param {...*} values Values of the template
     * @returns {String} The request-message string
     */
    request : function (strings, ...values) {
        return `${LIGHT_BLUE}REQUEST:  ${concatTemplateString(strings, values)} ${END}`;
    },
    /**
     * Turns a message into a console-log-string to indicate a warning.
     * The color will be yellow
     * @param {Array} strings Template base strings
     * @param {...*} values Values of the template
     * @returns {String} The warning-message string
     */
    warning : function (strings, ...values) {
        return `${ORANGE}WARNING:  ${concatTemplateString(strings, values)} ${END}`;
    },
    /**
     * Turns a message into a console-log-string to indicate something critical.
     * The color will be pink
     * @param {Array} strings Template base strings
     * @param {...*} values Values of the template
     * @returns {String} The critical-message string
     */
    critical : function (strings, ...values) {
        return `${PINK}CRITICAL: ${concatTemplateString(strings, values)} ${END}`;
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
function concatTemplateString (strings, values) {
    const traces = values.map((val) => val instanceof Error ? `\n${val.stack}` : '').join('');
    const result = strings.reduce((prev, curr, i) => `${prev}${values[i-1].toString()}${curr}`);
    return `${result}${traces}`;
}