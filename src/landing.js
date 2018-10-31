import React from "react";
import styled from "styled-components";
import LogoComp from "./logo";

const Container = styled.div`
  display: flex;
  justify-content: center;
  max-width: 900px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 64px;
  @media (max-width: 700px) {
    padding-left: 10px;
  }
`;

const SubTitle = styled.div`
  font-size: 20px;
`;

const Warning = styled.div`
  background-color: #fff0c5;
  padding: 10px;
  border-radius: 5px;
  margin-top: 30px;
`;

const Highlight = styled.span`
  color: #2196f3;
`;

const Instructions = styled.div`
  margin-top: 30px;
`;
const Instruction = styled.div`
  padding-left: 5px;
  margin-top: 5px;
  margin-bottom; 5px;
`;

const Logo = styled.div`
  font-size: 35px;
  margin-bottom: 5px;
  display: none;
  @media (max-width: 700px) {
    display: block;
  }
`;

export default function Landing() {
  return (
    <Container>
      <Content>
        <LogoComp />
        <SubTitle>
          A catalog of <Highlight>react hooks with live preview.</Highlight>
        </SubTitle>
        <Instruction>🍍 A collection of small React hooks</Instruction>
        <Instruction>
          💡 All examples are interactive. Experiment as you wish
        </Instruction>

        <Instructions>
          Add your hook to the list in two steps,
          <Instruction>
            📝 Document your hook in{" "}
            <a href="https://github.com/Raathigesh/hooks.guide/tree/master/public/docs">
              docs folder
            </a>
            . Refer{" "}
            <a href="https://github.com/Raathigesh/hooks.guide/blob/master/public/docs/template.md">
              template.md.
            </a>
          </Instruction>
          <Instruction>✅ Send a PR</Instruction>
        </Instructions>
        <Warning>
          Hooks are a new feature proposal that lets you use state and other
          React features without writing a class. They’re currently in React
          v16.7.0-alpha and being discussed in{" "}
          <a href="https://github.com/reactjs/rfcs/pull/68">an open RFC</a>.
        </Warning>
      </Content>
    </Container>
  );
}
