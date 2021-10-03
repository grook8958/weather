const { APIAlert } = require('../Utils/Constants');

/**
 * Represents a formatted alert object from the API
 * @type {Alert} 
 */
class Alert {
  /**
   * @typedef {Object} Alert The alert object
   * @property {String} headline Alert headline
   * @property {String} messageType Type of alert
   * @property {String} severity The severity of the alert
   * @property {String} urgency The urgency of the alert
   * @property {String} areas Areas affected
   * @property {String} category The category of the alert
   * @property {String} certainty The certainty of the alert
   * @property {String} event The Event
   * @property {String} note Notes of the alert
   * @property {Date} effective Effective
   * @property {String} expires The expire date
   * @property {String} description The description of the alert
   * @property {String} instruction The instruction to follow
   */

  /**
   * The contructor of this class
   * @param {APIAlert} data The location data returned by the API
   */
  constructor(data) {
    /**
     * The alert headline
     * @type {String}
     */
    this.headline = data.headline ?? null;

    /**
     * The message type of the alert
     * @type {String}
     */
    this.messageType = data.msgType ?? null; 

    /**
     * The severity of the alert
     * @type {String}
     */
    this.severity = data.severity ?? null;
     
     /**
     * The urgency of the alert
     * @type {String}
     */
    this.urgency = data.urgency ?? null; 

    /**
     * The areas concerned by the alert
     * @type {String}
     */
    this.areas = data.areas ?? null;
     
    /**
     * The category of alert
     * @type {String}
     */
    this.category = data.category ?? null; 

    /**
     * The certainty of the alert
     * @type {String}
     */
    this.certainty = data.certainty ?? null;
    
    /**
     * The Event
     * @type {String}
     */
    this.event = data.event ?? null;
    
    /**
     * The notes of the alert
     * @type {String}
     */
    this.note = data.note ?? null; 

    /**
     * The Effective
     * @type {Date}
     */
    this.effective = data.effective ?? null;
    
    /**
     * The expire date
     * @type {Date}
     */
    this.expires = data.expires ?? null;

    /**
     * The description of the alert
     * @type {String}
     */
    this.description = data.desc ?? null;

    /**
     * The instructions to follow
     * @type {String}
     */
    this.instruction = data.instruction ?? null;
    
  }

  /**
   * Returns a JSON of object of this class
   * @returns {Object}
   */
  toJson() {
    const { headline, messageType, severity, urgency, areas, category, certainty, event, note, effective, expires, description, instruction } = this;

    return {
      headline, 
      messageType, 
      severity, 
      urgency, 
      areas, 
      category, 
      certainty, 
      event, 
      note, 
      effective, 
      expires, 
      description, 
      instruction
    };
  }
}


module.exports = Alert;