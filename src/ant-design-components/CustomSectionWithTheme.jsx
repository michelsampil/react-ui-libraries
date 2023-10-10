import { ConfigProvider, Button, Space, Input, Divider } from "antd";

export const CustomSectionWithTheme = () => {
  const barbieTheme = {
    components: {
      Button: {
        colorPrimary: "pink",
        algorithm: true, // Enable algorithm
      },
      Input: {
        colorPrimary: "yellow",
        algorithm: true, // Enable algorithm
      },
    },
  };

  const hulkTheme = {
    components: {
      Button: {
        colorPrimary: "#2bb800",
        // here we won't see any additional styles like in hover cases
        // because the algorithm to auto-generate the styles isn't enabled
      },
      Input: {
        colorPrimary: "#2bb800",
        // here we won't see any additional styles like in hover cases
        // because the algorithm to auto-generate the styles isn't enabled
      },
    },
  };

  return (
    <>
      <ConfigProvider theme={barbieTheme}>
        <Space>
          <div style={{ fontSize: 14 }}>Enable algorithm: </div>
          <Input placeholder="Please Input" />
          <Button type="primary">Submit</Button>
        </Space>
      </ConfigProvider>
      <Divider />
      <ConfigProvider theme={hulkTheme}>
        <Space>
          <div style={{ fontSize: 14 }}>Disable algorithm: </div>
          <Input placeholder="Please Input" />
          <Button type="primary">Submit</Button>
        </Space>
      </ConfigProvider>
    </>
  );
};
