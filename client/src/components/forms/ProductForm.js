import React, { useState } from "react";
import { Button, Typography, Image, Input, Form, Col, InputNumber, Upload, Tabs, Select } from "antd";
import { InfoCircleFilled, StarFilled } from '@ant-design/icons';
import ImgCrop from 'antd-img-crop';

const { Title, Text } = Typography;
const { TextArea } = Input;
const { TabPane } = Tabs;
const { Option } = Select;
const { Item } = Form;

const ProductForm = (props) => {
	const { recordId, onClose } = props;
	const [form] = Form.useForm();

	const [fileList, setFileList] = useState([]);
	const [categories, ] = useState([ //sample
		{ id: 1, name: "Mouse" },
		{ id: 2, name: "Keyboard" },
		{ id: 3, name: "Monitor" },
		{ id: 4, name: "Package" },
		{ id: 5, name: "Utilities" },
	]);

	const onFinish = (formData) => {
		console.log("formData", formData)
	}

  const onPreview = async file => {
    let src = file.url;
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

	const dummyRequest = ({ file, onSuccess }) => {
		setTimeout(() => {
			onSuccess("ok");
		}, 0);
	};

	return (
		<div className="ant-card" style={{ height: 'calc(100vh - 120px)', padding: 10, display: "flex" }}>
			<Col xs={0} md={4} xl={5} xxl={6}/>
			<Col xs={24} md={16} xl={14} xxl={12} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
				<div style={{ flex: 1, overflowX: "auto", overflowY: "hide" }}>
					<Form
						name="product"
						initialValues={{}}
						onFinish={onFinish}
						form={form}
						colon={false}
						labelCol={{
							span: 4,
						}}
					>
						<Tabs defaultActiveKey="1">
							<TabPane
								tab={
									<span style={{ padding: 5 }}>
										<InfoCircleFilled />
										Product Info
									</span>
								}
								key="1"
								style={{ overflow: "auto" }}
							>
								<div style={{ padding: 10 }}>
									<Item
										style={{ marginBottom: 10 }}
										name="name"
										hasFeedback
										rules={[
											{
												required: true,
												message: 'Name is required.',
											}
										]}
									>
										<Input placeholder="Name (required)" size="small" />
									</Item>
									<Item
										style={{ marginBottom: 10 }}
										name="description"
										hasFeedback
									>
										<TextArea size="large" placeholder="Description" />
									</Item>
									<Item
										style={{ marginBottom: 10 }}
										name="price"
										hasFeedback
										rules={[
											{
												required: true,
												message: 'Name is required.',
											}
										]}
									>
										<InputNumber
											placeholder="Price (required)"
											size="large"
											min={1}
											style={{ width: "100%" }}
											controls={false}
										/>
									</Item>
									<Item
										style={{ marginBottom: 10 }}
										name="stocks"
										hasFeedback
										rules={[
											{
												required: true,
												message: 'Name is required.',
											}
										]}
									>
										<InputNumber
											placeholder="Stocks / Quantity"
											size="large"
											min={0}
											style={{ width: "100%" }}
											controls={false}
										/>
									</Item>
									<Item
										style={{ marginBottom: 10 }}
										name="subcategory"
										hasFeedback
									>
										<Select mode="tags" style={{ width: "100%" }} placeholder="Categories / Tags" size="large">
											{categories.map((item) => (
												<Option key={item.id.toString()}>{item.name}</Option>
											))}
										</Select>
									</Item>

									{/* Images */}
									<div style={{ border: "1px solid lightgray", borderRadius: 10, padding: 10 }}>
										<Title level={5}>Product Images</Title>
										<Item
											style={{ marginBottom: 10 }}
											name="filelist"
											hasFeedback
										>
											<ImgCrop rotate>
												<Upload
													customRequest={dummyRequest}
													listType="picture-card"
													onPreview={onPreview}
												>
													{fileList.length < 5 && '+ Upload'}
												</Upload>
											</ImgCrop>
										</Item>
									</div>
								</div>
							</TabPane>
							<TabPane
								tab={
									<span style={{ padding: 5 }}>
										<StarFilled />
										Ratings and Reviews
									</span>
								}
								key="2"
							>
								Tab 2
							</TabPane>
						</Tabs>
					</Form>
				</div>
				<div style={{ display: "flex", gap: 5 }}>
					<div style={{ flex: 1 }}/>
					<Button type="primary" style={{ borderRadius: 10 }} onClick={() => form.submit()}>
						Save
					</Button>
					<Button type="primary" style={{ borderRadius: 10 }} onClick={onClose}>
						<Text strong style={{ color: "white" }}>Back</Text>
					</Button>
				</div>
			</Col>
			<Col xs={0} md={4} xl={5} xxl={6}/>
		</div>
	)
}

export default ProductForm;