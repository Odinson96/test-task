import React, { useState } from 'react';
import { value } from '../interfaces/IValue';
import { Pen } from '../svg/pen';
import { Trash } from '../svg/trash';
import { EditCustomers } from './EditCustomers';
import { Sidebar } from './Sidebar';
import { AllUser } from './State';
import { Icons } from './Icons.js';

// export function UsersList({ data }: InferGetStaticPropsType<typeof getStaticProps>) {
export function UsersList() {
  const [users, setUsers] = useState<value[]>(AllUser);
  const [title, setTitle] = useState<string>('new');
  const [edit, setEdit] = useState<value>({
    name: '',
    lastName: '',
    company: '',
    status: 'user',
    email: '',
    password: '',
  });
  const [index, setIndex] = useState<number>(0);

  const handleDelete = (filter: string) => {
    setUsers((prevState: value[]) => {
      let users = [...prevState];
      let res = users.filter((el: value) => el.email !== filter);
      return res;
    });
  };

  const comeBack = () => {
    setTitle('new');
  };

  const changeEvent = (i: number) => {
    setEdit(users[i]);
    setIndex(i);
    setTitle('edit');
  };

  const handleChange = (value: value[]) => {
    setUsers(value);
  };

  const handleUpdate = (value: value) => {
    console.log(index);
    console.log(value);
    setUsers((prevState) => {
      let users = [...prevState];
      users[index] = value;
      return users;
    });
  };

  return (
    <div className="display: flex">
      {title === 'new' ? (
        <Sidebar onClick={handleChange} />
      ) : (
        <EditCustomers comeBack={comeBack} onClick={handleUpdate} data={edit} />
      )}
      <div>
        <div className="ml-10 pr-10">
          <div className="mb-10 mt-10 text-xl">
            <h1>Customers</h1>
          </div>
          {users.length > 0 ? (
            <div className="display: flex">
              <div>
                <h4 className="mb-4  text-gray-500">Name</h4>
                {users.map((user: value, i: number) => (
                  <div key={user.email} className="display: flex w-40 mb-5">
                    <div className="mr-3">
                      <Icons value={user.email} />
                    </div>
                    <h5>
                      {user.name} {user.lastName}
                    </h5>
                  </div>
                ))}
              </div>
              <div className=" ml-28">
                <h4 className="mb-4  text-gray-500">Company</h4>
                {users.map((user: value, i: number) => (
                  <div key={user.email} className="display: flex mb-5">
                    <h5>{user.company}</h5>
                  </div>
                ))}
              </div>
              <div className=" ml-28">
                <h4 className="mb-4  text-gray-500">Email</h4>
                {users.map((user: value, i: number) => (
                  <div key={user.email} className="display: flex mb-5">
                    <h5>{user.email}</h5>
                  </div>
                ))}
              </div>
              <div className="ml-14">
                <h4 className="mb-4  text-gray-500">Admin</h4>
                {users.map((user: value, i: number) => (
                  <div key={user.email} className="mb-5">
                    <div
                      className={
                        user.status === 'admin'
                          ? 'bg-sky-500 w-15 h-6 rounded-lg'
                          : 'bg-slate-200 w-15 h-6 rounded-lg'
                      }
                    ></div>
                  </div>
                ))}
              </div>
              <div className=" ml-12">
                <h4 className="mb-4 text-gray-500">Actions</h4>
                {users.map((user: value, i: number) => (
                  <div key={user.email} className="display: flex mb-4 max-h-7">
                    <h5>
                      <button onClick={() => changeEvent(i)}>
                        {' '}
                        <Pen />{' '}
                      </button>
                      <button onClick={() => handleDelete(user.email)}>
                        {' '}
                        <Trash />{' '}
                      </button>
                    </h5>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <h4>Список пуст</h4>
          )}
        </div>
      </div>
    </div>
  );
}
