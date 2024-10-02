import { useRef } from "react";
import "./App.css";
import Button from "./components/Button";
import Container from "./components/Container";
import Input from "./components/Input";
import Form, { FormHandle } from "./components/Form";

function App() {
  const input = useRef<HTMLInputElement>(null);
  const customForm = useRef<FormHandle>(null);

  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string };

    if (!data || typeof data !== "object" || !("name" in data) || !("age" in data)) {
      return;
    }

    console.log(extractedData);
    customForm.current?.clear();
  }

  return (
    <main>
      <Input id="name" label="Your Name" type="text" ref={input} />
      {/* <Input id="age" label=" Your Age" type="number" /> */}
      <p>
        <Button>A Button</Button>
      </p>
      <p>
        <Button href="https://google.com">An Anchor</Button>
      </p>
      <Container as={Button}>Click Me</Container>

      {/* ini form */}
      <Form onSave={handleSave} ref={customForm}>
        <Input type="text" label="Name" id="name" />
        <Input type="number" label="Age" id="age" />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
