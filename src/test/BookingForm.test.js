// BookingForm.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "../components/BookingForm";
describe("BookingForm Component", () => {
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();
  const availableTimes = ["17:00", "18:00", "19:00"];

  beforeEach(() => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );
  });

  test("renders the form correctly", () => {
    expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Contact Number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
  });

  test("updates form fields on user input", () => {
    const firstNameInput = screen.getByLabelText(/First Name/i);
    const lastNameInput = screen.getByLabelText(/Last Name/i);
    const contactNumberInput = screen.getByLabelText(/Contact Number/i);
    const dateInput = screen.getByLabelText(/Choose date/i);
    const guestsInput = screen.getByLabelText(/Number of guests/i);
    const occasionSelect = screen.getByLabelText(/Occasion/i);

    fireEvent.change(firstNameInput, { target: { value: "John" } });
    fireEvent.change(lastNameInput, { target: { value: "Doe" } });
    fireEvent.change(contactNumberInput, { target: { value: "123-456-7890" } });
    fireEvent.change(dateInput, { target: { value: "2024-09-10" } });
    fireEvent.change(guestsInput, { target: { value: "4" } });
    fireEvent.change(occasionSelect, { target: { value: "Anniversary" } });
    expect(firstNameInput.value).toBe("John");
    expect(lastNameInput.value).toBe("Doe");
    expect(contactNumberInput.value).toBe("123-456-7890");
    expect(dateInput.value).toBe("2024-09-10");
    expect(guestsInput.value).toBe("4");
    expect(occasionSelect.value).toBe("Anniversary");
  });

  test("dispatches date change action when date changes", () => {
    const dateInput = screen.getByLabelText(/Choose date/i);

    fireEvent.change(dateInput, { target: { value: "2024-09-15" } });

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "UPDATE_TIMES",
      payload: "2024-09-15",
    });
  });

  test('validates contact number format', () => {
    const contactInput = screen.getByLabelText('Contact Number');
    fireEvent.change(contactInput, { target: { value: '1234567890' } });
    expect(contactInput).toBeInvalid();

    fireEvent.change(contactInput, { target: { value: '123-456-7890' } });
    expect(contactInput).toBeValid();
  });

  test('sets min date to current date', () => {
    const dateInput = screen.getByLabelText('Choose date');
    const currentDate = new Date().toISOString().split('T')[0];
    expect(dateInput).toHaveAttribute('min', currentDate);
  });

  
});
