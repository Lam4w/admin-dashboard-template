"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

import { Input } from "@/components/ui/input"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/form"

const accountFormSchema = z.object({
    email: z
        .string({
            required_error: "Email required.",
        })
        .email(),
    password: z
        .string({
            required_error: "Email required.",
        })
})

// This can come from your database or API.
const defaultValues = {
    email: '',
    password: ''
}

export function LoginForm() {
    const form = useForm({
        resolver: zodResolver(accountFormSchema),
        defaultValues,
    })

    function onSubmit(data) {
        console.log(data);
    }

    return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                    <Input placeholder="email@gmail.com" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                    <Input type='password' {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />

            <Button type="submit" className='w-full'>Login</Button>
        </form>
        </Form>
    )
}