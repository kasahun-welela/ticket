"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPin } from "lucide-react";

export default function TripForm() {
  const formSchema = z.object({
    source: z.string().min(2, {
      message: "Source must be at least 2 characters.",
    }),
    destination: z.string().min(2, {
      message: "Destination must be at least 2 characters.",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      source: "",
      destination: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <CardTitle>Book Your Trip</CardTitle>
        <CardDescription>Enter your trip details</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="source"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                        <MapPin className="h-5 w-5 text-green-900" />
                      </div>
                      <Input
                        id="source"
                        placeholder=" "
                        {...field}
                        className="peer h-14 w-full rounded-md border border-gray-200 bg-background pl-10 pr-4 py-2 text-sm shadow-sm transition-all placeholder:text-transparent focus:border-primary focus:ring-2 focus:ring-primary/50"
                      />
                      <label
                        htmlFor="source"
                        className="pointer-events-none absolute left-10 top-2 origin-[0] -translate-y-4 scale-75 transform text-sm text-muted-foreground duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-primary"
                      >
                        Leaving from
                      </label>
                    </div>
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="destination"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                        <MapPin className="h-5 w-5 text-green-900" />
                      </div>
                      <Input
                        id="destination"
                        placeholder=" "
                        {...field}
                        className="peer h-14 w-full rounded-md border border-gray-200 bg-background pl-10 pr-4 py-2 text-sm shadow-sm transition-all placeholder:text-transparent focus:border-primary focus:ring-2 focus:ring-primary/50"
                      />
                      <label
                        htmlFor="destination"
                        className="pointer-events-none absolute left-10 top-2 origin-[0] -translate-y-4 scale-75 transform text-sm text-muted-foreground duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-primary"
                      >
                        Destination
                      </label>
                    </div>
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Search
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
