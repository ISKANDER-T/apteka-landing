import { Button } from "@/shared/ui/kit/button";
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  Form,
} from "@/shared/ui/kit/form";
import { Input } from "@/shared/ui/kit/input";
import { useForm } from "react-hook-form";

export const ZayavkaForm = () => {
  const form = useForm();
  const onSubmit = () => {};
  const errorMessage = false;
  const isPending = false;

  return (
    <Form {...form}>
      <form className="flex flex-col gap-10 w-96" onSubmit={onSubmit}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="shadow-none border-t-0 border-r-0 border-l-0 focus-visible:ring-0"
                  autoComplete={"off"}
                  placeholder="Atıńız"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone_number"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="shadow-none border-t-0 border-r-0 border-l-0 focus-visible:ring-0"
                  placeholder="Telefon"
                  {...field}
                />
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
              <FormControl>
                <Input
                  className="shadow-none border-t-0 border-r-0 border-l-0 focus-visible:ring-0"
                  placeholder="Xabar"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {errorMessage && (
          <p className="text-destructive text-sm">{errorMessage}</p>
        )}

        <Button disabled={isPending} type="submit" className="bg-[#5691FF]">
          JOLLAW
        </Button>
      </form>
    </Form>
  );
};
