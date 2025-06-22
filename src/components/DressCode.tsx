import { Typography } from 'antd';

function DressCode() {
  const colors = ['#5c87ba', '#bcd8f9', '#f3f6e9', '#c6bed8', '#8682bd'];
  // const images = [
  //   '/src/assets/stock-3.jpg',
  //   '/src/assets/stock-4.jpg',
  //   '/src/assets/stock-5.jpg',
  //   '/src/assets/stock-6.jpg',
  // ];

  return (
    <Typography className='section-dressCode' >
      <Typography.Title className="section-title" >
        Dress Code
      </Typography.Title>
      {/* <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          marginTop: '20px',
        }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Dress code example ${index + 1}`}
            style={{ width: '100px', borderRadius: '10px' }}
          />
        ))}
      </div> */}
      <Typography.Paragraph className='dressCode-paragraph section-paragraph' >
        Давайте добавим сколько сможем слов про Дресс-Код, а то как-то скудно получается
      </Typography.Paragraph>
      <div className='dressCode-shapesGroup' >
        {colors.map((color, index) => (
          <div className='dressCode-shape'
            key={index}
            style={{
              backgroundColor: color,
            }}
          ></div>
        ))}
      </div>
    </Typography>
  );
}

export default DressCode;
