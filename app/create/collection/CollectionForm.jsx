"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { CalendarIcon, Check, ChevronsUpDown } from "lucide-react"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command"
import { Input } from "@/components/ui/input"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
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

const languages = [
    { label: "English", value: "en" },
    { label: "French", value: "fr" },
    { label: "German", value: "de" },
    { label: "Spanish", value: "es" },
    { label: "Portuguese", value: "pt" },
    { label: "Russian", value: "ru" },
    { label: "Japanese", value: "ja" },
    { label: "Korean", value: "ko" },
    { label: "Chinese", value: "zh" },
];

const accountFormSchema = z.object({
    name: z
        .string()
        .min(2, {
        message: "Name must be at least 2 characters.",
        })
        .max(30, {
        message: "Name must not be longer than 30 characters.",
        }),
    dob: z.date({
        required_error: "A date of birth is required.",
    }),
    language: z.string({
        required_error: "Please select a language.",
    }),
})

// This can come from your database or API.
const defaultValues = {
  // name: "Your name",
  // dob: new Date("2023-01-23"),
}

export function CollectionForm() {
    const form = useForm({
        resolver: zodResolver(accountFormSchema),
        defaultValues,
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
                    <Input placeholder="Your name" {...field} />
                </FormControl>
                <FormDescription>
                    This is the name that will be displayed on your profile and in
                    emails.
                </FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="language"
            render={({ field }) => (
                <FormItem className="flex flex-col">
                <FormLabel>Language</FormLabel>
                <Popover>
                    <PopoverTrigger asChild>
                    <FormControl>
                        <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                            "w-[200px] justify-between",
                            !field.value && "text-muted-foreground"
                        )}
                        >
                        {field.value
                            ? languages.find(
                                (language) => language.value === field.value
                            )?.label
                            : "Select language"}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                    </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                    <Command>
                        <CommandInput placeholder="Search language..." />
                        <CommandEmpty>No language found.</CommandEmpty>
                        <CommandGroup>
                        {languages.map((language) => (
                            <CommandItem
                            value={language.value}
                            key={language.value}
                            onSelect={(value) => {
                                form.setValue("language", value)
                            }}
                            >
                            <Check
                                className={cn(
                                "mr-2 h-4 w-4",
                                language.value === field.value
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                            />
                            {language.label}
                            </CommandItem>
                        ))}
                        </CommandGroup>
                    </Command>
                    </PopoverContent>
                </Popover>
                <FormDescription>
                    This is the language that will be used in the dashboard.
                </FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />
            <Button type="submit">Update account</Button>
        </form>
        </Form>
    )
}