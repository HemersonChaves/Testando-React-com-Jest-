import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";


describe("App Componet", () => {
  test("render", () => {
    const { getByText } = render(<App />)

    expect(getByText("Hello world")).toBeTruthy();
    expect(getByText("Hello world")).toBeInTheDocument();
    expect(getByText("Hello world")).toHaveAttribute("class", "test");
  });

  it("sholf render list items", () => {
    const { getByText } = render(<App />);

    expect(getByText("Diego")).toBeInTheDocument()
    expect(getByText("Rodz")).toBeInTheDocument()
    expect(getByText("Mayk")).toBeInTheDocument()
  });

  it("shold be able to add new item to the list", async () => {
    const { getByText, debug, getByPlaceholderText } = render(<App />);
    debug();

    const inputElement = getByPlaceholderText("Adicione novo item");
    const addButton = getByText("Adicionar");

    await userEvent.type(inputElement, "Novo");
    await userEvent.click(addButton);
    debug();

    expect(getByText("Novo")).toBeInTheDocument()
  })
})
