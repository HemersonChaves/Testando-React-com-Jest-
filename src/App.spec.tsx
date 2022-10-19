import { render, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
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

  it("shold be able to  remove item from to the list", async () => {
    const { queryByText, getAllByText, debug } = render(<App />);
    debug();

    const removeButtons = getAllByText("Remover")

    await userEvent.click(removeButtons[0]);
    debug();
    // await waitForElementToBeRemoved(() => {
    //   return getAllByText("Diego")
    // })
    await waitFor(() => {
      expect(queryByText("Diego")).not.toBeInTheDocument()
    })
  });

  it("shold be able to add new item to the list", async () => {
    const { getByText, debug, getByPlaceholderText, findByText } = render(<App />);
    debug();

    const inputElement = getByPlaceholderText("Adicione novo item");
    const addButton = getByText("Adicionar");

    await userEvent.type(inputElement, "Novo");
    await userEvent.click(addButton);
    debug();
    await waitFor(() => {
      expect(getByText("Novo")).toBeInTheDocument()
    })
    expect(await findByText("Novo")).toBeInTheDocument()
  });
})
