import { Typography } from "antd";

function Introduction() {
  return (
    <Typography className="section-introduction">
      <Typography.Title className="introduction-title">Саша и Настя</Typography.Title>
      <Typography.Paragraph className="introduction-paragraph section-paragraph">
        Дорогие друзья!
        <br />
        С трепетом в сердце приглашаем вас разделить с нами самый важный и волшебный день в нашей жизни – день, когда мы станем
        одной семьёй! Ваша поддержка и любовь сделают этот момент по-настоящему особенным и незабываемым.
        <br />
        Будем счастливы видеть каждого из вас на нашем празднике!
      </Typography.Paragraph>
    </Typography>
  );
}

export default Introduction;
