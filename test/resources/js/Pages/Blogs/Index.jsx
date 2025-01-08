import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useForm, Head } from '@inertiajs/react';
import React from 'react';

export default function Index({auth}) {
const{data, setData, post, processing, errors, reset} = useForm({message: ''});
  function submit(e) {
      e.preventDefault();
      post(route('blogs.store'), { onSuccess: () => reset() });
  }
  return (
    <AuthenticatedLayout>
      <Head title="Blog message" />
      <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
        <form onSubmit={submit}>
          <textarea
            value={data.message}
            placeholder='Ваше сообщение'
            className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
            onChange={e=> setData('message', e.target.value)}
          ></textarea>
          <InputError message={errors.message} className="mt-2" />
          <PrimaryButton className='mt-4' disabled={processing}>Отправить</PrimaryButton>
        </form>
      </div>
    </AuthenticatedLayout>

  )
}

