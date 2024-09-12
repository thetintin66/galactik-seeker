import { Listener } from "../interface/Interface";
import Event from "./Event";

class EventDispatcher {
    listeners: Map<string, Listener[]>;

    constructor() {
        this.listeners = new Map();
    }

    addEventListener(type: string, listener: Listener | undefined) {
        if (!this.listeners.has(type)) {
            this.listeners.set(type, []);
        }
        
        this.listeners.get(type)?.push(listener!);
    }

    dispatchEvent(event: Event) {
        const listeners = this.listeners.get(event.type);

        if (listeners) {
            for (const listener of listeners) {
                listener(event);
            }
        }
    }

    removeEventListener(type: string, listener: Listener) {
        const listeners = this.listeners.get(type);

        if (listeners) {
            const index = listeners.indexOf(listener);

            if (index !== -1) {
                listeners.splice(index, 1);
                if (listeners.length === 0) {
                    this.listeners.delete(type);
                }
            }
        }
    }

    getListeners() {
        return this.listeners;
    }
}

export { EventDispatcher };