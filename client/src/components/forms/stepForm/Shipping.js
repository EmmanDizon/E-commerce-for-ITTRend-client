import { Input, Form, Card, Select, Typography } from "antd";
import {
  HomeOutlined,
  MailOutlined,
  EnvironmentOutlined,
  PhoneOutlined,
  FlagOutlined,
} from "@ant-design/icons";
import { countries } from "countries-list";
import logo from "../../../assets/images/logo.png";

const { Option } = Select;

const Login = function () {
  const [form] = Form.useForm();
  const countriesList = Object.values(countries);

  console.log(countriesList);
  const Shipping = () => {
    return (
      <>
        <Form name="shipping" initialValues={{}} form={form}>
          <Card
            style={{
              borderRadius: "20px",
            }}
          >
            <Form.Item
              name="address"
              hasFeedback
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              rules={[
                {
                  required: true,
                  message: "Please input your address.",
                },
              ]}
            >
              <Input
                placeholder="Address"
                size="small"
                prefix={<HomeOutlined />}
              />
            </Form.Item>

            <Form.Item
              name="city"
              hasFeedback
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              rules={[
                {
                  required: true,
                  message: "Please input your city.",
                },
              ]}
            >
              <Input
                placeholder="City"
                size="small"
                prefix={<EnvironmentOutlined />}
              />
            </Form.Item>

            <Form.Item
              name="phone"
              hasFeedback
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              rules={[
                {
                  required: true,
                  message: "Please input your contact number.",
                },
              ]}
            >
              <Input
                placeholder="Phone No."
                size="small"
                prefix={<PhoneOutlined />}
              />
            </Form.Item>

            <Form.Item
              name="postal"
              hasFeedback
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              rules={[
                {
                  required: true,
                  message: "Please input your postal code.",
                },
              ]}
            >
              <Input
                placeholder="Postal Code"
                size="small"
                prefix={<MailOutlined />}
              />
            </Form.Item>

            <Form.Item
              name="country"
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please input your address.",
                },
              ]}
            >
              <Select
                showSearch
                placeholder="Country"
                size="large"
                prefix={<FlagOutlined />}
              >
                {countriesList.map((country) => {
                  return (
                    <Option value={country.name} key={country.name}>
                      {country.name}
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>
          </Card>
        </Form>
      </>
    );
  };
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="d-flex justify-content-center align-items-center"></div>
          {Shipping()}
        </div>
      </div>
    </div>
  );
};

export default Login;
