import React from "react";
import styled from "styled-components";
import googleIcon from "../images/googleIcon.png";
import { Link } from "react-router-dom";

const Main = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 100%;
  align-items: stretch;
  background: white;
  margin: 0;
  padding: 0;
`;

const LeftContainer = styled.div`
  background: white;
  height: 100%;
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
`;

const RightContainer = styled.div`
  min-height: 100%;
  width: 55%;
  display: flex;
  align-items: stretch;
  background: url("https://images.pexels.com/photos/4195410/pexels-photo-4195410.jpeg?cs=srgb&dl=pexels-karolina-grabowska-4195410.jpg&fm=jpg");
  background-size: cover;
`;

const LoginText = styled.h1`
  font-family: "Poppins";
  font-weight: 700;
  font-size: 26px;
  color: black;
  width: 70%;
`;

const Text2 = styled.h6`
  font-family: "Quicksand";
  font-weight: 500;
  font-size: 14px;
  color: #989898;
  margin-top: 8px;
  width: 70%;
`;

const SignInWithGoogle = styled.div`
  width: 70%;
  height: 38px;
  border-radius: 20px;
  margin-top: 40px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GoogleIcon = styled.div`
  background: url(${googleIcon});
  background-size: cover;
  width: 20px;
  height: 20px;
  margin-right: 8px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Text3 = styled.h5`
  font-family: "Poppins";
  font-weight: 600;
  font-size: 12px;
  color: black;
`;

const Text4 = styled.h6`
  font-family: "Quicksand";
  font-weight: 500;
  font-size: 11px;
  color: #989898;
  background-color: white;
  margin: 30px auto;
  width: 70%;
  display: inline-block;

  &:before,
  &:after {
    background-color: #d3d3d3;
    content: "";
    display: inline-block;
    height: 0.01em;
    position: relative;
    vertical-align: middle;
    width: 30%;
  }

  &:before {
    right: 0.5em;
    margin-left: 10px;
  }

  &:after {
    left: 0.5em;
    margin-right: 10px;
  }
`;

const Text5 = styled.h5`
  font-family: "Roboto";
  font-weight: 700;
  font-size: 12px;
  color: black;
  margin-top: 20px;
  width: 70%;
`;

const BackgroundFilter = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(38, 70, 83, 0.7);
  display: flex;
`;

const InputBox = styled.input`
  width: 68%;
  height: 36px;
  margin-top: 10px;
  border-radius: 5px;
  padding: 0px 10px;
  margin-bottom: 10px;
  border: 1px solid #d3d3d3;
`;

const CheckboxContainer = styled.div`
  width: 70%;
  height: 10px;
  display: flex;
  margin-top: 12px;
`;

const CheckBox = styled.input`
  padding 1px;
  margin-right: 10px;
  &:checked {
    background: #1e90ff;
  }
`;

const CheckboxLabel = styled.h5`
  font-family: "Roboto";
  font-weight: 400;
  font-size: 13px;
  color: #555555;
  width: 50%;
`;

const Button = styled.button`
  width: 65%;
  height: 36px;
  color: white;
  font-family: "Quicksand";
  font-weight: 500;
  background-color: #6cb6ff;
  border: none;
  border-radius: 4px;
  margin-top: 40px;

  &:hover {
    background-color: #1e90ff;
  }
`;

const SignUpTextContainer = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const Text6 = styled.h5`
  font-family: "Quicksand";
  font-weight: 700;
  font-size: 13px;
  margin-right: 5px;
  color: ${(props) => props.color};
`;

const Text7 = styled.h5`
  font-family: "Quicksand";
  font-weight: 700;
  font-size: 13px;
  margin-right: 5px;
  color: ${(props) => props.color};
  cursor: pointer;
`;

function LoginPage() {
  return (
    <Main>
      <LeftContainer>
        <LoginText>Login</LoginText>
        <Text2>
          Login with your data that you entered during your registration.
        </Text2>
        <SignInWithGoogle>
          <GoogleIcon />
          <Text3>Sign In with Google</Text3>
        </SignInWithGoogle>
        <Text4>or Sign In with Email</Text4>
        <Text5>Email</Text5>
        <InputBox type="email" placeholder="example@gmail.com" />
        <Text5>Password</Text5>
        <InputBox type="password" placeholder="at leat 8 characters" />
        <CheckboxContainer>
          <CheckBox type="checkbox" />
          <CheckboxLabel>Keep me logged in</CheckboxLabel>
        </CheckboxContainer>
        <Button>Log In</Button>
        <SignUpTextContainer>
          <Text6 color="#555555">Don't have an Account? </Text6>
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <Text7 color="#1e90ff">Sign Up</Text7>
          </Link>
        </SignUpTextContainer>
      </LeftContainer>
      <RightContainer></RightContainer>
    </Main>
  );
}

export default LoginPage;
