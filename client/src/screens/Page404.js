import React from "react";
import { Typography, Image, Grid } from "antd";

const { useBreakpoint } = Grid;

const Page404 = () => {
  const screens = useBreakpoint();

  return (
    <div 
      style={{
        display: "flex",
        flexDirection: screens.xs ? "column" : "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        height: "80vh",
      }}
    >
      <Image preview={false} src="/images/404.png" width={screens.xs ? "100vw" : "60vw"} />
      <div style={{ flexDirection: "row", marginLeft: !screens.xs ? "-10vh" : 0 }}>
        <Typography.Title style={{ fontSize: screens.xs ? 50 : 100, textAlign: screens.xs ? "center" : "left" }}>Page Not Found</Typography.Title>
        <Typography.Paragraph style={{ fontSize: 15, textAlign: screens.xs ? "center" : "left" }}>
          The page you are looking is invalid or unavailable. Maybe the url is incorrect.
        </Typography.Paragraph>
      </div>
    </div>
  )
};

export default Page404;