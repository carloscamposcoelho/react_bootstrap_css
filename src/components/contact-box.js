import React from 'react';
import { useForm } from "react-hook-form";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";

const StyledRow = styled(Row)`
    margin-bottom: 10px;
`;

export default function ContactBox() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <StyledRow>
        <Col>
          <input type="text" className="form-control" placeholder="Name" {...register("Name", { required: true, maxLength: 80 })} />
        </Col>
        <Col>
          <input type="text" className="form-control" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
        </Col>
      </StyledRow>
      <StyledRow>
        <Col>
          <textarea className="form-control" placeholder="Massage" rows={4} {...register("Message", {})} />
        </Col>
      </StyledRow>
      <StyledRow>
        <Col>
          <input className="btn btn-primary" type="submit" />
        </Col>
      </StyledRow>
    </form>
  )
}