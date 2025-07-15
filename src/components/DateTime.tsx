import { Typography } from 'antd';

function DateTime() {

  return (
    <Typography className='section-dateTime' >
      <Typography.Title className="dateTime-title section-title" >
        Ждём вас
      </Typography.Title>
      <Typography.Paragraph className='dateTime-paragraph section-paragraph' >
        15 августа в 15:30
      </Typography.Paragraph>
      <Typography.Title className="dateTime-title section-title" >
        Август
      </Typography.Title>
      <div className='dateTime-calendar'> </div>
    </Typography>
  );
}

export default DateTime;
