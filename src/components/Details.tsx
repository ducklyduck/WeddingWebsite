import { Typography } from 'antd';

function Details() {
  return (
    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
      <Typography.Title className="section-title" level={3}>Details & Wishes</Typography.Title>
      <Typography.Paragraph style={{ fontSize: '16px', color: '#555' }}>
        We are eagerly waiting to celebrate this special day with you! If you have any questions, feel free to contact us at <strong>+1-234-567-890</strong>.
      </Typography.Paragraph>
      <Typography.Paragraph style={{ fontSize: '16px', color: '#555' }}>
        Your presence is the greatest gift, but if you wish to give something, we kindly ask for gifts in envelopes.
      </Typography.Paragraph>
      <a
        href="https://forms.gle/example-google-form"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#6b8768',
          color: '#fff',
          borderRadius: '5px',
          textDecoration: 'none',
        }}
      >
        Fill Out the Menu Form
      </a>
    </div>
  );
}

export default Details;
