"use client"

import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
import * as z from "zod"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/form"

const productFormSchema = z.object({
    name: z
        .string()
        .min(5, {
            message: "Product name must be at least 2 characters.",
        })
        .max(50, {
            message: "Username must not be longer than 30 characters.",
        }),
    description: z
        .string({
            required_error: "Description required.",
        }),
    price: z
        .string({
            required_error: "Price required.",
        }),
    color: z
        .string({
            required_error: "Color required.",
        }),
    material: z
        .string({
            required_error: "Material required.",
        }),
    category: z
        .string({
            required_error: "Category required.",
        }),
    sizeChart: z
        .string({
            required_error: "Size chart required.",
        }),
    collection: z
        .string()
        .optional(),
    urls: z
    .array(
        z.object({
            value: z.string().url({ message: "Please enter a valid URL." }),
        })
    )
    .optional(),
})

// This can come from your database or API.
const defaultValues = {
    name: 'Product name',
    description: 'Product description',
    price: '',
    color: '',
    material: '',
    category: '',
    sizeChart: '',
}

export function ProductForm() {
    const form = useForm({
        resolver: zodResolver(productFormSchema),
        defaultValues,
        mode: "onChange",
    })

    const { fields, append } = useFieldArray({
        name: "urls",
        control: form.control,
    })

    function onSubmit(data) {
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        })
        console.log(data);
    }

    return (
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                    <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Product description</FormLabel>
                <FormControl>
                    <Textarea
                    className="resize-none"
                    {...field}
                    />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                    <Input {...field} type='number'/>
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="color"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Color</FormLabel>
                <FormControl>
                    <Input {...field}/>
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="material"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Material</FormLabel>
                <FormControl>
                    <Input {...field}/>
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Category</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                    <SelectTrigger>
                        <SelectValue placeholder="Select the category of the product" />
                    </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                    <SelectItem value="m@example.com">T-shirts</SelectItem>
                    <SelectItem value="m@google.com">Shirts</SelectItem>
                    <SelectItem value="m@support.com">Pants</SelectItem>
                    </SelectContent>
                </Select>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="collection"
            render={({ field }) => (
                <FormItem>
                <FormLabel>From collection</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                    <SelectTrigger>
                        <SelectValue placeholder="Select a collection" />
                    </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                    <SelectItem value="m@example.com">Fall 22</SelectItem>
                    <SelectItem value="m@google.com">Winter 22</SelectItem>
                    <SelectItem value="m@support.com">Summer 22</SelectItem>
                    </SelectContent>
                </Select>
                <FormMessage />
                </FormItem>
            )}
            />
            <div>
            {/* {fields.map((field, index) => (
                <FormField
                control={form.control}
                key={field.id}
                name={`urls.${index}.value`}
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className={cn(index !== 0 && "sr-only")}>
                        URLs
                    </FormLabel>
                    <FormDescription className={cn(index !== 0 && "sr-only")}>
                        Add links to your website, blog, or social media profiles.
                    </FormDescription>
                    <FormControl>
                        <Input {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
            ))} */}
            {/* <Button
                type="button"
                variant="link"
                size="sm"
                className="mt-1"
                onClick={() => append({ value: "" })}
            >
                Add URL
            </Button> */}
            </div>
            <Button type="submit">Create product</Button>
        </form>
        </Form>
    )
}