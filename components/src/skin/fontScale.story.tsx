import * as React from "react";

import { Container, Columns, Column } from "bloomer";
import glamorous from "glamorous";

import { storiesOf } from "@storybook/react";

import fontScale from "./fontScale";

const S = glamorous.div({
  padding: 0,
  backgroundColor: "rgba(23, 23, 23, 0.1)"
});

storiesOf("fontScale", module)
  .addDecorator(story => (
    <Container style={{ minHeight: "100vh" }}>
      <Columns isCentered isVCentered style={{ minHeight: "100vh" }}>
        <Column isSize={6}>{story()}</Column>
      </Columns>
    </Container>
  ))
  .add("from -n to +n", () => (
    <div>
      <S {...fontScale(6)}>Scale 6</S>
      <S {...fontScale(5)}>Scale 5</S>
      <S {...fontScale(4)}>Scale 4</S>
      <S {...fontScale(3)}>Scale 3</S>
      <S {...fontScale(2)}>Scale 2</S>
      <S {...fontScale(1)}>Scale 1</S>
      <S {...fontScale(0)}>Scale 0</S>
      <S {...fontScale(-1)}>Scale -1</S>
      <S {...fontScale(-2)}>Scale -2</S>
    </div>
  ));
