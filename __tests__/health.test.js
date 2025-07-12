import { getHealthStatus } from '../src/health';

describe('getHealthStatus', () => {
  it('should return "healthy" if health > 50', () => {
    expect(getHealthStatus({ name: 'Маг', health: 90 })).toBe('healthy');
  });

  it('should return "wounded" if health between 15 and 50', () => {
    expect(getHealthStatus({ name: 'Лучник', health: 30 })).toBe('wounded');
    expect(getHealthStatus({ name: 'Мечник', health: 15 })).toBe('wounded');
  });

  it('should return "critical" if health < 15', () => {
    expect(getHealthStatus({ name: 'Зомби', health: 10 })).toBe('critical');
    expect(getHealthStatus({ name: 'Скелет', health: 0 })).toBe('critical');
  });
});