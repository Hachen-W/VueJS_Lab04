interface Observer {
  update(temperature: number): void;
}

interface Subject {
  subscribe(observer: Observer): void;
  unsubscribe(observer: Observer): void;
  notify(): void;
}

class WeatherStation implements Subject {
  private observers: Observer[] = [];
  private temperature: number = 0;

  setTemperature(temp: number): void {
    this.temperature = temp;
    this.notify();
  }

  subscribe(observer: Observer): void {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer): void {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notify(): void {
    for (const observer of this.observers) {
      observer.update(this.temperature);
    }
  }
}

class PhoneDisplay implements Observer {
  update(temperature: number): void {
    console.log(`Телефон: Текущая температура ${temperature} градусов.`);
  }
}

const station = new WeatherStation();
const phone1 = new PhoneDisplay();

station.subscribe(phone1);
station.setTemperature(25);
