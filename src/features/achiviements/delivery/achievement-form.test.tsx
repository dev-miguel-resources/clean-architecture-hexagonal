import { act, fireEvent, render, screen } from "@testing-library/react";
import { AchievementForm } from "./achievement-form";

describe("AchievementForm Component Tests", () => {
  const button = () => screen.getByText("Submit");
  const input = () => screen.getByDisplayValue("");
  const options = (value: string) => ({ target: { value } });

  it("renders AchievementForm correctly without input value", async () => {
    await act(async () => {
      render(<AchievementForm />);
      fireEvent.click(button());
    });
  });

  it("renders AchievementForm correctly with input value and length less than minimal length", async () => {
    await act(async () => {
      render(<AchievementForm />);
      fireEvent.change(input(), options("T"));
      fireEvent.click(button());
    });
  });

  it("renders AchievementForm correctly with input value and length equals to minimal length", async () => {
    await act(async () => {
      render(<AchievementForm />);
      fireEvent.change(input(), options("Tests"));
      fireEvent.click(button());
    });
  });
});
