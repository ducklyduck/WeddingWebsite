import { Typography } from "antd";

function Introduction() {
  return (
    <section
      id="introduction"
      style={{
        textAlign: "center",
        marginBottom: "40px",
        position: "relative",
        minHeight: 360,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // borderRadius: 16,
        overflow: "hidden",
        background: "none",
      }}
    >
      {/* Фоновое изображение с градиентом */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          background:
            "linear-gradient(to top, rgba(255,255,255,0.96) 0%, rgba(75, 72, 72, 0.7) 10%, rgba(255,255,255,0.1) 70%, rgba(255,255,255,0.02) 100%), url(/src/assets/stock-3.jpg) center/cover no-repeat",
        }}
      />
      <div style={{ position: "relative", zIndex: 1, width: "100%" }}>
        <Typography.Title level={1} style={{ fontSize: '72px', color: "#becfd9", marginTop: 40, marginBottom: 0 }}>
          Саша и Настя
        </Typography.Title>
        <Typography.Title level={3} style={{ color: " #becfd9 ", marginTop: 8 }}>
          Наша история
        </Typography.Title>
        {/* Скрытая фотография stock-2 */}
        <img src="/src/assets/Stock-2.jpg" alt="Childhood Yana" style={{ display: "none" }} />
        <div style={{ marginTop: 24, display: "flex", justifyContent: "center" }}>
          <Typography.Paragraph
            style={{
              maxWidth: 440,
              fontWeight: 500,
              fontSize: 18,
              margin: "0 auto",
              color: "#becfd9", // белая кость
            }}
          >
            Мы встретились ещё детьми и больше не захотели расставаться. Теперь мы счастливы пригласить вас разделить этот день с
            нами!
          </Typography.Paragraph>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
