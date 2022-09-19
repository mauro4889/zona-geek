import { Button, Center, FormControl,  FormLabel, Heading, Input, Stack } from '@chakra-ui/react'
import React from 'react'
import { useForm } from 'react-hook-form'

export const CreateAcount2 = () => {
    const {register, handleSubmit, watch, formState:{errors}} = useForm()

    const onSubmit = values =>{
        return console.log(values)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Center>
                <Stack w={'50%'} >
                    <Heading>Crear su cuenta</Heading>
                    <FormControl>
                        <FormLabel>Ingrese su nombre</FormLabel>
                        <Input type='text' {...register('name',{requiered: true})} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Ingrese su email</FormLabel>
                        <Input type='email'{...register('email', {required: true})} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Ingrese su contraseña</FormLabel>
                        <Input type='password' {...register('password',{requiered: true})} />
                    </FormControl>
                    <Button type='submit' >Crean cuenta</Button>
                </Stack>
            </Center>
        </form>
    )
}
