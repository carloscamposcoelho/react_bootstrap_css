import React from 'react';
import { useForm } from "react-hook-form";
import { Row, Col } from "react-bootstrap";
import { StyledContactBox } from "./styles";


export default function ContactBox() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <StyledContactBox>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col>
            <input type="text" className="form-control" placeholder="Name" {...register("Name", { required: true, maxLength: 80 })} />
          </Col>
          <Col>
            <input type="text" className="form-control" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
          </Col>
        </Row>
        <Row>
          <Col>
            <textarea className="form-control"  placeholder="Massage" rows="4" {...register("Message", {})} />
          </Col>
        </Row>
        <Row>
          <Col>
            <input className="btn btn-primary" type="submit" />
          </Col>
        </Row>
      </form>
    </StyledContactBox>
  )
}