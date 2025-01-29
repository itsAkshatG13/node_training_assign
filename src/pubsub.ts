type Callback = (data: any) => void;

export class PubSub {
  private topics: { [key: string]: Callback[] };

  constructor() {
    this.topics = {};
  }

  // Subscribe to an event
  subscribe(topic: string, listener: Callback): void {
    if (!this.topics[topic]) {
      this.topics[topic] = [];
    }
    this.topics[topic].push(listener);
  }

  // Publish an event
  publish(topic: string, data: any): void {
    if (this.topics[topic]) {
      this.topics[topic].forEach((listener) => listener(data));
    }
  }
}
