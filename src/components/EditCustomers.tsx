import { ChangeEvent, SyntheticEvent, memo, useEffect, useState } from 'react';
import { value } from '../interfaces/IValue';

interface EditCustomers {
  data: value;
  onClick: (value: value) => void;
  comeBack: () => void;
}

export const EditCustomers = memo(function EditCustomers({
  data,
  onClick,
  comeBack,
}: EditCustomers) {
  const [radioChanger, setRadio] = useState<string>(data.status);
  const [showPassw, setShowPass] = useState<string>('password');
  const [inputValue, setInput] = useState<string[]>([
    data?.name,
    data?.lastName,
    data?.company,
    data?.status,
    data?.email,
    data?.password,
  ]);

  const [value, setValue] = useState<value>({
    name: '',
    lastName: '',
    company: '',
    status: radioChanger,
    email: '',
    password: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>, i: number) => {
    setInput((prevState) => {
      let input = [...prevState];
      input[i] = e.target.value;
      return input;
    });
    handleValueSetter();
  };

  const handleValueSetter = () => {
    setValue((prevState) => {
      let value = prevState;
      value.name = inputValue[0];
      value.lastName = inputValue[1];
      value.company = inputValue[2];
      value.status = radioChanger;
      value.email = inputValue[4];
      value.password = inputValue[5];
      return value;
    });
  };

  const handleSendUser = (e: SyntheticEvent) => {
    e.preventDefault();
    handleValueSetter();
    setTimeout(() => {
      onClick(value);
    });
    setTimeout(() => {
      comeBack();
    }, 10000);
  };

  const changeType = () => {
    radioChanger === 'user' ? setRadio('admin') : setRadio('user');
  };

  return (
    <div className=" w-1/3 pt-10 ml-10 pr-10 border-r h-screen -mt-10 border-slate-200">
      <h1 className="mb-10 mt-10 text-xl">Edit customers</h1>
      <form onSubmit={(e) => handleSendUser(e)}>
        <div className="display: flex">
          <div>
            <div className="relative mb-8">
              <label
                htmlFor="firstName"
                className="block text-sm w-full font-medium leading-6 text-gray-500"
              >
                First name
              </label>
              <input
                value={inputValue[0] || ''}
                required
                type="text"
                onChange={(e) => handleChange(e, 0)}
                name="firstName"
                id="firstName"
                className="block rounded-md w-full border-0 py-1.5 pl-3 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="ml-6">
            <div className="relative mb-8">
              <label
                htmlFor="lastName"
                className="block text-sm w-full font-medium leading-6 text-gray-500"
              >
                Last name
              </label>
              <input
                value={inputValue[1] || ''}
                required
                onChange={(e) => handleChange(e, 1)}
                type="text"
                name="lastName"
                id="lastName"
                className="block rounded-md w-full border-0 py-1.5 pl-3 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="relative mb-8">
          <label
            htmlFor="company"
            className="block text-sm w-full font-medium leading-6 text-gray-500"
          >
            Company
          </label>
          <input
            value={inputValue[2] || ''}
            required
            onChange={(e) => handleChange(e, 2)}
            type="text"
            name="company"
            id="company"
            className="block rounded-md w-full border-0 py-1.5 pl-3 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="h-10 p-1 cursor-pointer mb-7 rounded-lg display: flex bg-gray-200">
          <div
            className={
              radioChanger === 'user'
                ? 'rounded-lg bg-white w-1/2 display: flex justify-center items-center'
                : 'rounded-lg w-1/2 display: flex justify-center items-center'
            }
            onClick={changeType}
          >
            {' '}
            <h6>User</h6>
          </div>
          <div
            className={
              radioChanger === 'admin'
                ? 'rounded-lg bg-white w-1/2 display: flex justify-center items-center'
                : 'rounded-lg w-1/2 display: flex justify-center items-center'
            }
            onClick={changeType}
          >
            {' '}
            <h6>Administrator</h6>
          </div>
        </div>
        <label htmlFor="email" className="block text-sm w-full font-medium leading-6 text-gray-500">
          Email
        </label>
        <div className="relative mb-8">
          <input
            value={inputValue[4] || ''}
            required
            onChange={(e) => handleChange(e, 4)}
            type="text"
            name="email"
            id="email"
            className="block rounded-md w-full border-0 py-1.5 pl-3 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        <button
          onClick={(e) => handleSendUser(e)}
          className="rounded-lg text-zinc-50 bg-sky-500 w-full h-10"
        >
          Save
        </button>
      </form>
    </div>
  );
});
