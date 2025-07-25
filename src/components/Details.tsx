import { Typography } from 'antd';

function Details() {
  return (
    <Typography className='section-details' >
      <Typography.Title className="section-title" >Детали и пожелания</Typography.Title>
      <Typography.Paragraph className='details-paragraph section-paragraph' >
        Не ломайте голову над подарком - мы будем рады Вашим пожеланиям в конвертах или ярким творческим подаркам
      </Typography.Paragraph>
      {/* <Typography.Paragraph className='details-paragraph section-paragraph' >
        Your presence is the greatest gift, but if you wish to give something, we kindly ask for gifts in envelopes.
      </Typography.Paragraph> */}
      <a
        className='details-button'
        href="https://forms.gle/kSDyzvYqF5x1YmQM6"
        target="_blank"
        rel="noopener noreferrer"
      >
        Просим заполнить Форму
      </a>
      <div className='details-composition'> </div>
    </Typography>
  );
}

export default Details;
