import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

const baseUrl = `http://localhost:3000`;

type Props = {
  props: { name?: string | null; EmailVerifyLink: string };
};

export const EmailTemplateVerifyEmail = ({
  props = { name: "Test User", EmailVerifyLink: "Text Link" },
}: Props) => {
  const { name, EmailVerifyLink } = props;
  const welcomMsg = name ? `Hello, ${name}` : "Hello";

  return (
    <Html>
      <Head />
      <Preview>Verify your Email</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={box}>
            <Img
              src={`${baseUrl}/logo.png`}
              width="49"
              height="21"
              alt="Stripe"
            />
            <Hr style={hr} />
            <Text style={paragraph}>{welcomMsg} welcome to our platform</Text>
            <Text style={paragraph}>You can verify you email here:</Text>
            <Button style={button} href={EmailVerifyLink}>
              View your Stripe Dashboard
            </Button>
            <Hr style={hr} />
            <Text style={paragraph}>
              Finally, we&apos;ve put together a to ensure your website conforms
              to verify email.
            </Text>
            <Text style={paragraph}>
              We&apos;ll be here to help you with any step along the way. You
              can find answers to most questions and get in touch with us on our{" "}
              <Link style={anchor} href="https://support.stripe.com/">
                support site
              </Link>
              .
            </Text>
            <Text style={paragraph}>— The Stripe team</Text>
            <Hr style={hr} />
            <Text style={footer}>
              Stripe, 354 Oyster Point Blvd, South San Francisco, CA 94080
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default EmailTemplateVerifyEmail;

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const box = {
  padding: "0 48px",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const paragraph = {
  color: "#525f7f",

  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
};

const anchor = {
  color: "#556cd6",
};

const button = {
  backgroundColor: "#656ee8",
  borderRadius: "5px",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "100%",
  padding: "10px",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
};
