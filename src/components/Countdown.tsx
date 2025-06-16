import dayjs from 'dayjs';
import { useState, useEffect } from 'react';
import { Typography } from 'antd';

function Countdown() {
  const weddingDate = dayjs('2025-08-15');
  const calculateTimeLeft = () => {
    const now = dayjs();
    const diff = weddingDate.diff(now);
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft);
    }, 1000);
    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  return (
    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
      <Typography.Title className="section-title" level={3}>Обратный Отсчет до Свадьбы</Typography.Title>
      <Typography.Paragraph style={{ fontSize: '48px', color: '#6c68ad' }}>
        {timeLeft.days} дней, {timeLeft.hours} часов, {timeLeft.minutes} минут, {timeLeft.seconds} секунд
      </Typography.Paragraph>
    </div>
  );
}

export default Countdown;
