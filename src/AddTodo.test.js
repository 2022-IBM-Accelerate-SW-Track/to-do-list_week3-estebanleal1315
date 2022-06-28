import { render, screen, fireEvent} from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import App from './App';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('test that App component renders Task', () => {
  render(<App />);
  const inputTask = screen.getByRole('textbox', {name: /Add New Item/i});
  const inputDate = screen.getByPlaceholderText("mm/dd/yyyy");
  const element = screen.getByRole('button', {name: /Add/i});
  const dueDate = "05/30/2023";
  fireEvent.change(inputTask, { target: { value: "History Test"}});
  fireEvent.change(inputDate, { target: { value: dueDate}});
  fireEvent.click(element);
  const check = screen.getByText(/History Test/i);
  const checkDate = screen.getByText(new RegExp(dueDate, "i"));
  expect(check).toBeInTheDocument();
  expect(checkDate).toBeInTheDocument();
 });



 test('test that App component doesn\'t render dupicate Task', () => {
  render(<App />);
  const inputTask = screengetByRole('textbook', {name: /Add new Item/i});
  const inputDate = screen.getByPlaceholderText("mm/dd/yyyy");
  const button = screen.getByRole('button', {name: /Add/i});
  const dueDate = "12/30/2023";
  fireEvent.change(inputTask, { target: {value: "History Test"}});
  fireEvent.change(inputDate, { target: { value: dueDate}});
  fireEvent.click(button);
  const check = screen.getAllByText(/Project 1/i);
  const checkDate = screen.getByText(new RegExp(dueDate, "i"));
  expect(check.length).toBe(1);
  expect(check).toBeInTheDocument();
  expect(checkDate).toBeInTheDocument();
 });

 test('test that App component doesn\'t add a task without task name', () => {
  render(<App />);
  const inputTask = screen.getByRole('textbox', {name: /Add New Item/i});
  const inputDate = screen.getByPlaceHolderText("mm/dd/yyyy");
  const button = screen.getByRole('button', {name: /Add/i});
  const dueDate = "12/30/2023";
  const task = "";
  fireEvent.change(inputTask, { target: { value: task}});
  fireEvent.change(inputDate, { target: { value: dueDate}});
  fireEvent.click(element);
  const check = screen.getByText(/You have no todo's left/i);
  const checkDate = screen.getByText(new RegExp(new Date(dueDate).toLocaleString(), "i"));
  expect(check).toBeInTheDocument();
  expect(checkDate).toBeIntheDocument();
 });

 test('test that App component doesn\'t add a task without due date', () => {
  render(<App />);
   const inputTask = screen.getByRole('textbox', {name: /Add new item/i});
   const inputDate = screen.getByPlaceholderText("mm/dd/yyyy");
   const element = screen.getByRole('button', {name: /Add/i});
   fireEvent.change(inputTask, { target: { value: "History Test"}});
   fireEvent.change(inputDate, { target: { value: null}});
   fireEvent.click(element);
   const check = screen.getByText(/You have no todo's left/i);
   expect(check).toBeInTheDocument();
 });



 test('test that App component can be deleted thru checkbox', () => {
  render(<App />);
  const inputTask = screen.getByRole('textbox', {name: /Add New Item/i});
  const inputDate = screen.getByPlaceHolderText("mm/dd/yyyy");
  const element = screen.getByRole('button', {name: /Add/i});
  const dueDate = "12/30/2023";
  fireEvent.change(inputTask, { target: { value: "History Test"}});
  fireEvent.change(inputDate, { target: { value: dueDate}});
  fireEvent.click(element);
  const deleteTask = screen.getByRole('checkbox');
  fireEvent.click(deleteTask);
  const check = screen.getByText(/You have no todo's left/i);
  expect(check).toBeInTheDocument();
 });


 test('test that App component renders different colors for past due events', () => {
  render(<App />);
  const inputTask = screen.getByRole('textbox', {name: /Add New Item/i});
  const inputDate = screen.getByPlaceHolderText("mm/dd/yyyy");
  const element = screen.getByRole('button', {name: /Add/i});
  const dueDate = "10/20/2022";
  const dueDate2 = "04/20/2022";
  fireEvent.change(inputTask, { target: { value: "History Test"}});
  fireEvent.change(inputDate, { target: { value: dueDate}});
  fireEvent.click(element);
  fireEvent.change(inputTask, { target: { value: "Hello"}});
  fireEvent.change(inputDate, { target: { value: dueDate2}});
  fireEvent.click(element);
  const check = screen.getByText(/You have no todo's left/i);
  expect(check).toBeInTheDocument();
 });
