import { render, screen } from "@testing-library/react";
import User from "./User";
import axios from "axios";

jest.mock("axios"); // Мокаем axios

describe("User Component", () => {
  let response;

  beforeEach(() => {
    // Ответ, который будет возвращаться из axios
    response = {
      data: [
        { id: 1, name: "Leanne Graham" },
        { id: 2, name: "Ervin Howell" },
        { id: 3, name: "Clementine Bauch" },
      ],
    };
  });

  test("renders user list", async () => {
    // Мокаем запрос GET на axios
    axios.get.mockResolvedValue(response);

    // Рендерим компонент
    render(<User />);

    // Проверяем, что элементы появились
    const users = await screen.findAllByTestId("user-item");
    expect(users.length).toBe(3);

    // Проверяем, что axios был вызван только один раз
    expect(axios.get).toBeCalledTimes(1);

    // Дополнительно выводим на экран для отладки
    screen.debug();
  });
});
