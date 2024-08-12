'use client';

import { useState } from 'react';
import { useForm, yupResolver } from '@mantine/form';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebaseConfig';
import { Select, Textarea, TextInput } from '@mantine/core';
import * as yup from 'yup';

export interface ContactFormData {
    projectType: string;
    source: string;
    name: string;
    company: string;
    email: string;
    phone: string;
    projectDescription: string;
}

export const Estimate = () => {
    const validationSchema = yup.object().shape({
        projectType: yup.string().required('Required'),
        source: yup.string().required('Required'),
        name: yup.string().required('Required'),
        company: yup.string().required('Required'),
        email: yup.string().email('Invalid email address').required('Required'),
        phone: yup.string().matches(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/, 'Invalid phone number').required('Required'),
        projectDescription: yup.string().required('Required'),
    });

    const form = useForm<ContactFormData>({
        initialValues: {
            projectType: '',
            source: '',
            name: '',
            company: '',
            email: '',
            phone: '',
            projectDescription: '',
        },
        validate: yupResolver(validationSchema),
    });
    const [message, setMessage] = useState<string>('');

    const handleSubmit = async (values: ContactFormData) => {
        try {
            setMessage('');
            await addDoc(collection(db, 'contacts'), values);
            form.reset();
            setMessage('Your request has been submitted successfully!');
            setTimeout(() => {
                setMessage('');
            }, 3000);
        } catch (error) {
            setMessage('There was an error submitting your request.');
            console.error('There was an error!', error);
        }
    };


    return (
        <div className="flex justify-center items-center min-h-screen bg-[#161519] py-12 ">
            <form onSubmit={form.onSubmit(handleSubmit)} className=" flex flex-col gap-4  max-w-[90%] lg:w-[600px] xl:w-[900px] 2xl:w-[1000px] w-full mt-28"
                data-aos="fade-up"
                data-aos-duration="600"
            >
                <h1 className="text-7xl font-bold text-white text-center mb-8 max-lg:text-4xl  ">Let’s get you an estimate </h1>
                <div className='flex items-start gap-4 max-md:flex-col'
                >
                    <Select
                        {...form.getInputProps('projectType')}
                        label="WHAT IS THE TYPE OF YOUR PROJECT?"
                        placeholder="Pick value"
                        className='flex-1 max-md:w-full'
                        data={['Webt Site', 'Web Application', 'Design']}
                        labelProps={{ className: 'text-white mb-1' }}
                        styles={(theme) => ({
                            input: {
                                height: '50px', // or any other height value you want
                            },
                        })}
                    />
                    <Select
                        {...form.getInputProps('source')}
                        label="HOW DID YOU FIND OUT ABOUT ME?"
                        placeholder="Pick value"
                        className='flex-1  max-md:w-full'
                        data={['Recommendation', 'Linkedin']}
                        labelProps={{ className: 'text-white mb-1' }}
                        styles={(theme) => ({
                            input: {
                                height: '50px', // or any other height value you want
                            },
                        })}

                    />
                </div>
                <div className='flex items-start gap-4 max-md:flex-col' >
                    <TextInput
                        {...form.getInputProps('name')}
                        placeholder="YOUR NAME"
                        labelProps={{ className: 'text-white mb-1' }}
                        className='flex-1 max-md:w-full'
                        styles={(theme) => ({
                            input: {
                                height: '50px', // or any other height value you want
                            },
                        })}
                    />
                    <TextInput
                        {...form.getInputProps('company')}
                        placeholder="COMPANY"
                        labelProps={{ className: 'text-white mb-1' }}
                        className='flex-1 max-md:w-full'
                        styles={(theme) => ({
                            input: {
                                height: '50px', // or any other height value you want
                            },
                        })}
                    />
                </div>
                <div className='flex items-start gap-4 max-md:flex-col' >
                    <TextInput
                        {...form.getInputProps('email')}
                        placeholder="EMAIL"
                        labelProps={{ className: 'text-white mb-1' }}
                        className='flex-1 max-md:w-full'
                        styles={(theme) => ({
                            input: {
                                height: '50px', // or any other height value you want
                            },
                        })}

                    // error="error"
                    />
                    <TextInput
                        {...form.getInputProps('phone')}
                        placeholder="PHONE"
                        labelProps={{ className: 'text-white mb-1' }}
                        className='flex-1 max-md:w-full'
                        styles={(theme) => ({
                            input: {
                                height: '50px', // or any other height value you want
                            },
                        })}

                    />
                </div>
                <Textarea
                    {...form.getInputProps('projectDescription')}
                    placeholder="TELL ME ABOUT YOUR PROJECT"
                    labelProps={{ className: 'text-white mb-1' }}
                    styles={(theme) => ({
                        input: {
                            height: '100px', // or any other height value you want
                        },
                    })}
                />
                <button
                    type="submit"
                    className="w-full py-2 bg-[#f1c453] hover:bg-yellow-600 text-white font-bold rounded"
                >
                    SUBMIT
                </button>
                {message && <p className="mt-4 text-white">{message}</p>}
            </form>
        </div>
    );
};
