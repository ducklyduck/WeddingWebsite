import dayjs from 'dayjs';
import { useState, useEffect } from 'react';
import { Flex, Typography } from 'antd';

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
    <Flex vertical className='section-countdown' >
      {/* <Flex vertical style={{alignItems: 'center', justifyItems: 'center', height: '100vh'}}> */}
      <Typography.Title className="section-title countdown-title" >До свадьбы осталось...</Typography.Title>
      <Typography.Paragraph className='countdown-paragraph section-paragraph' >
        {timeLeft.days} дней, {timeLeft.hours} часов, {timeLeft.minutes} минут
        {/* {timeLeft.seconds} секунд */}
      </Typography.Paragraph>
      {/* </Flex> */}
    </Flex>
  );
}

export default Countdown;
