import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useAddItemMutation } from '../store/api/NoteSlice';

const AddItem= () => {

  const [addItem ] = useAddItemMutation();

  const initialValues = {
    title: '',
    price: '',
    image: '',
  };

  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    price: Yup.string().required('price is required'),
    image: Yup.string().required('image is required'),
  });

  const handleSubmit = (values) => {
     
    addItem(values)
    .unwrap()
    .then(() =>navigate('/'))
  

     };

  return (
    <div className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="mb-5">
            <Field
              type="text"
              id="title"
              name="title"
              placeholder="Title"
              className="border border-gray-300 shadow p-3 w-full rounded mb-"
            />
            <ErrorMessage name="title" component="div" className="text-red-500" />
          </div>

          <div className="mb-5">
            <Field
              type="text"
              name="price"
              placeholder="Body"
              className="border border-gray-300 shadow p-3 w-full rounded mb-"
            />
            <ErrorMessage name="content" component="div" className="text-red-500" />
          </div>

            <div className="mb-5">
            <Field

                type="text"
                name="image"
                placeholder="image"
                className="border border-gray-300 shadow p-3 w-full rounded mb-"
                />
                <ErrorMessage name="image" component="div" className="text-red-500" />
            </div>

          <button
            type="submit"
            className="block w-full bg-yellow-400 text-black font-bold p-4 rounded-lg hover:bg-yellow-500"
          >
            Add Item
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddItem;
