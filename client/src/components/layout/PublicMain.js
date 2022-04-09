import { Outlet } from "react-router-dom";
import { Layout } from 'antd';
import PublicHeader from "./PublicHeader";
import Footer from "./Footer";

const { Content } = Layout;

const PublicMain = () => {
    return (
        <Layout className="layout">
            <PublicHeader/>
            <Content style={{ padding: '0 50px' }}>
                <Outlet/>
            </Content>
            <Footer/>
        </Layout>
    )
}

export default PublicMain;