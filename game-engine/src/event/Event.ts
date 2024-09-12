class Event {
    type: string;
    message: string;
    cancelable: boolean;
    cancelled: boolean;

    constructor(type: string, message: string) {
        this.type = type;
        this.message = message;
        this.cancelable = true;
        this.cancelled = false;
    }

    isCancelable(): boolean{
        return this.cancelable;
    }

    setCancelable(cancelable: boolean): void {
        this.cancelable = cancelable;
    }

    isCancelled(): boolean {
        return this.cancelled;
    }

    setCancelled(cancelled: boolean): void {
        if (!this.isCancelable()) {
            throw new Error("This event is not cancelable");
        }
        this.cancelled = cancelled;
    }

    getType(): string {
        return this.type;
    }

    toString(): string {
        return `Event [type=${this.type}, cancelable=${this.cancelable}, cancelled=${this.cancelled}]`;
    }
}

export default Event;