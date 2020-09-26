import React from "react";
import styled from "styled-components";
import { COLOURS } from "../COLOURS";
import { useDefinedValue } from "../useDefinedValue";
import { Modal } from "./Modal";

const StyledConfirmModal = styled(Modal)`
  &.appear {
    transform: translateY(100%);
  }
  &.appear-active {
    transform: translateY(0%);
    transition: transform 500ms;
  }

  &.exit {
    transform: translateY(0%);
  }
  &.exit-active {
    transform: translateY(100%);
    transition: transform 500ms;
  }
`;

const View = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin: 0 16px;
`;

const Container = styled.div`
  display: flex;
  margin-bottom: 8px;
  flex-flow: column nowrap;
  background-color: white;
  border-radius: 8px;
`;

const ConfirmText = styled.span`
  padding: 8px 0;
  line-height: 14px;
  font-size: 14px;
  border-bottom: 1px solid ${COLOURS.Grey};
`;

const TextButton = styled.button`
  border-radius: 8px;
  border: none;
  padding: 8px 0;
  cursor: pointer;
  background-color: white;

  &:active {
    background-color: lightgrey;
  }
`;

const DeleteButton = styled(TextButton)`
  color: red;
  font-size: 24px;
  line-height: 32px;
`;

const CancelButton = styled(TextButton)`
  color: ${COLOURS.Grey};
  font-size: 18px;
  line-height: 27px;
`;

interface Props {
  confirmText?: string;
  confirmButtonText: string;
  onConfirmClick?: VoidFunction;
  onCancelClick?: VoidFunction;
  className?: string;
  showing: boolean;
}

export const ConfirmModal = (props: Props) => {
  const definedConfirmText = useDefinedValue(props.confirmText);

  return (
    <StyledConfirmModal className={props.className} showing={props.showing}>
      <View>
        <Container>
          <ConfirmText>{definedConfirmText}</ConfirmText>
          <DeleteButton onClick={props.onConfirmClick}>
            {props.confirmButtonText}
          </DeleteButton>
        </Container>
        <Container>
          <CancelButton onClick={props.onCancelClick}>Cancel</CancelButton>
        </Container>
      </View>
    </StyledConfirmModal>
  );
};
