module.exports = {
    events: new Map(),

    /**
     * @param {String} event
     * @param {Object} subscriber
     * @param {Function} handler
     */
    on: function (event, subscriber, handler) {
        if (!this.events.has(event)) {
            this.events.set(event, []);
        }
        this.events.get(event).push({
            subscriber: subscriber,
            handler: handler
        });

        return this;
    },

    /**
     * @param {String} event
     * @param {Object} subscriber
     */
    off: function (event, subscriber) {
        if (this.events.has(event)) {
            var afterRemove = this.events.get(event).filter(el => el.subscriber !== subscriber);

            this.events.set(event, afterRemove);
        }

        return this;
    },

    /**
     * @param {String} event
     */
    emit: function (event) {
        if (this.events.has(event)) {
            this.events.get(event).forEach(s => {
                s.handler.call(s.subscriber);
            });
        }

        return this;
    }
};
