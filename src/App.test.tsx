import { act, fireEvent, render, screen } from "@testing-library/react";
import { App } from "./App";

describe("AchievementForm Component Tests", () => {
  const button = (text: string) => screen.getByText(text);

  it("renders App correctly with button clicks", async () => {
    await act(async () => {
      render(<App />);
      fireEvent.click(button("ES"));
      fireEvent.click(button("EN"));
    });
  });
});
