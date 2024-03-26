import { Formik } from "formik";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const Form = styled.div`
  width: 50%;
  margin: 20px auto;
  border: 1px solid black;
  border-radius: 10px;
  margin: 50px auto;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  margin: 10px;
`;

const Error = styled.div`
  color: #c22323;
`;

const Label = styled.div`
  width: 100px;
  padding-bottom: 10px;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  margin-bottom: 0.5rem;
`;

const Textarea = styled.textarea`
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  margin-bottom: 0.5rem;
  width: 100%;
`;

const ButtonNew = styled(Button)`
  margin: 20px auto;
  display: flex;
`;

function Home() {
  return (
    <Form>
      <Formik
        initialValues={{ userName: "", email: "", message: "" }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
          }, 1000);
        }}
        validate={(values) => {
          const errors = {};

          if (values.email.trim() === "") {
            errors.email = "Email cannot be empty";
          }

          if (values.userName.trim() === "") {
            errors.userName = "User name cannot be empty";
          }

          if (values.message.trim() === "") {
            errors.message = "Message cannot be empty";
          }

          return errors;
        }}
      >
        {({ errors, handleChange, handleSubmit, isSubmitting, values }) => (
          <form onSubmit={handleSubmit}>
            <Row>
              <Label>Email</Label>
              <Input
                name="email"
                onChange={handleChange}
                type="text"
                value={values.email}
              />
              {errors.email && <Error>{errors.email}</Error>}
            </Row>
            <Row>
              <Label>User name</Label>
              <Input
                name="userName"
                onChange={handleChange}
                type="text"
                value={values.userName}
              />
              {errors.userName && <Error>{errors.userName}</Error>}
            </Row>
            <Row>
              <Label>Message</Label>
              <Textarea
                name="message"
                onChange={handleChange}
                type="text"
                value={values.message}
              />
              {errors.message && <Error>{errors.message}</Error>}
            </Row>
            <ButtonNew disabled={isSubmitting} type="submit" variant="success">
              Submit
            </ButtonNew>
          </form>
        )}
      </Formik>
    </Form>
  );
}

export default Home;
