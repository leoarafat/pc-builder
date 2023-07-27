import {
  LoginOutlined,
  DoubleRightOutlined,
  CommentOutlined,
  FacebookFilled,
  LinkedinFilled,
  GoogleSquareFilled,
  TwitterSquareFilled,
} from "@ant-design/icons";
import { Button, Layout, Menu } from "antd";
const { Header, Content, Footer } = Layout;
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useSession } from "next-auth/react";

const RootLayout = ({ children }) => {
  const { data: session } = useSession();

  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className="brand-logo">
          <h1>
            <Link
              href="/"
              style={{
                color: "white",
                backgroundColor: "#404040",
                padding: "5px 10px",
                borderRadius: "3px",
              }}
            >
              AP Blog
            </Link>
          </h1>
        </div>
        <Menu theme="dark" mode="vertical" className={styles.menu_items}>
          <Link href="/feedback">
            <items
              style={{
                margin: "0px 25px",
              }}
            >
              <CommentOutlined />
              Feedbacks
            </items>
          </Link>
          <Link href="/dashboard">
            <items>
              <DoubleRightOutlined />
              Dashboard
            </items>
          </Link>
          {session?.user ? (
            <items>
              <Button
                onClick={async () => {
                  const success = await signOut();
                  if (success) {
                    alert("You are sign out");
                  }
                }}
              >
                <LoginOutlined />
                Logout
              </Button>
            </items>
          ) : (
            <Link href="/login">
              <items>
                <LoginOutlined />
                Login
              </items>
            </Link>
          )}
        </Menu>
      </Header>

      <Content
        style={{
          padding: "0 24px",
          minHeight: "100vh",
        }}
      >
        {children}
      </Content>

      <Footer
        style={{
          textAlign: "center",
        }}
      >
        <div className={styles.line}></div>
        <h2
          style={{
            fontSize: "28px",
          }}
        >
          AP Blog
        </h2>
        <p className={styles.social_icons}>
          <Link href="#">
            <FacebookFilled />
          </Link>
          <Link href="www.twitter.com">
            <TwitterSquareFilled />
          </Link>
          <Link href="#">
            <GoogleSquareFilled />
          </Link>
          <Link href="www.linkedin.com">
            <LinkedinFilled />
          </Link>
        </p>
        ap blog ©2023 Created by Arafat
      </Footer>
    </Layout>
  );
};
export default RootLayout;
