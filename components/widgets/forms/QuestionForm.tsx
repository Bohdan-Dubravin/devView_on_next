"use client";
import { Button } from "@/components/ui/button";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { questionsSchema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Editor } from "@tinymce/tinymce-react";
import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { createQuestion } from "@/lib/actions/question.actions";
import { usePathname, useRouter } from "next/navigation";

// ts-ignore
const typeForm: any = "gd";

interface Props {
  userId: string;
}

const QuestionForm = ({ userId }: Props) => {
  const router = useRouter();
  const pathName = usePathname();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof questionsSchema>>({
    resolver: zodResolver(questionsSchema),
    defaultValues: {
      title: "",
      explanation: "",
      tags: [],
    },
  });

  const handleInputChange = (
    e: React.KeyboardEvent<HTMLInputElement>,
    field: any
  ) => {
    if (e.key === "Enter" && field.name === "tags") {
      e.preventDefault();
      const tagInput = e.target as HTMLInputElement;
      const tagValue = tagInput.value.trim();

      if (tagValue.length) {
        if (tagValue.length > 15) {
          return form.setError("tags", {
            type: "required",
            message: "Tag must be less than 15 characters",
          });
        }

        if (!field.value.includes(tagValue as never)) {
          if (field.value.length >= 3) {
            return form.setError("tags", {
              type: "required",
              message: "You can add maximum 3 tags",
            });
          }

          form.setValue("tags", [...field.value, tagValue]);
          tagInput.value = "";
          form.clearErrors("tags");
        } else {
          form.trigger();
        }
      }
    }
  };

  const handleTagRemove = (tag: string, field: any) => {
    const newTags = field.value.filter((t: string) => t !== tag);

    form.setValue("tags", newTags);
  };

  const onSubmit = async (values: z.infer<typeof questionsSchema>) => {
    setIsSubmitting(true);

    try {
      await createQuestion({
        title: values.title,
        content: values.explanation,
        tags: values.tags,
        author: JSON.parse(userId),
      });

      router.push("/");
    } catch (error) {
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-10"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="flex  w-full flex-col">
              <FormLabel className="paragraph-semibold text-dark400_light800">
                Question Title <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl className="mt-3.5">
                <Input
                  className="no-focus paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 min-h-[56px] border"
                  placeholder="Type your question"
                  {...field}
                  onKeyDown={(e) => handleInputChange(e, field)}
                />
              </FormControl>
              <FormDescription className="body-regular  mt-2.5 text-light-500">
                Be specific and imagine you are asking a question to another
                person
              </FormDescription>
              <FormMessage className=" text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="explanation"
          render={({ field }) => (
            <FormItem className="flex  w-full flex-col">
              <FormLabel className="paragraph-semibold text-dark400_light800">
                Detailed explanation of your problem{" "}
                <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl className="mt-3.5">
                {/* <Editor
                  onInit={(evt, editor) => (editorRef.current = editor)}
                  initialValue="<p>This is the initial content of the editor.</p>"
                  init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                      "advlist autolink lists link image charmap print preview anchor",
                      "searchreplace visualblocks code fullscreen",
                      "insertdatetime media table paste code help wordcount",
                    ],
                    toolbar:
                      "undo redo | formatselect | " +
                      "bold italic backcolor | alignleft aligncenter " +
                      "alignright alignjustify | bullist numlist outdent indent | " +
                      "removeformat | help",
                    content_style:
                      "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                  }}
                /> */}
                <Editor
                  apiKey="chwt1419rk1ta090r31zuckykzpxrs79l7rfhuh02a8gr7m6"
                  init={{
                    height: 350,
                    plugins:
                      "autolink codesample emoticons image link lists searchreplace visualblocks casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography ",
                    toolbar:
                      "undo redo | codesample | bold italic underline forecolor | link image | align | numlist bullist | emoticons charmap ",
                    content_style: "body {font-size: 16px;}",

                    // resize: false,
                    // tinycomments_mode: "embedded",
                    // tinycomments_author: "Author name",
                    // mergetags_list: [
                    //   { value: "First.Name", title: "First Name" },
                    //   { value: "Email", title: "Email" },
                    // ],
                    // ai_request: (request, respondWith) =>
                    //   respondWith.string(() =>
                    //     Promise.reject("See docs to implement AI Assistant")
                    //   ),
                  }}
                  initialValue=""
                  onBlur={field.onBlur}
                  onEditorChange={(content) => field.onChange(content)}
                />
              </FormControl>
              <FormDescription className="body-regular  mt-2.5 text-light-500">
                Be specific and imagine you are asking a question to another
                person
              </FormDescription>
              <FormMessage className=" text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem className="flex  w-full flex-col">
              <FormLabel className="paragraph-semibold text-dark400_light800">
                Tags <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl className="mt-3.5">
                <>
                  <Input
                    className="no-focus paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 min-h-[56px] border"
                    placeholder="Add tags..."
                    onKeyDown={(e) => handleInputChange(e, field)}
                    // {...field}
                  />
                  {field.value.length > 0 && (
                    <div className="flex-start  mt-2.5  gap-2.5">
                      {field.value.map((tag: string) => (
                        <Badge
                          key={tag}
                          className="body-medium  background-light800_dark400 text-light400_light500 flex-center gap-2 rounded-md border-none px-4 py-2 capitalize"
                        >
                          {tag}
                          <Image
                            src="/assets/icons/close.svg"
                            width={12}
                            height={12}
                            alt="close icon"
                            className="cursor-pointer object-contain invert-0 dark:invert"
                            onClick={() => handleTagRemove(tag, field)}
                          />
                        </Badge>
                      ))}
                    </div>
                  )}
                </>
              </FormControl>
              <FormDescription className="body-regular  mt-2.5 text-light-500">
                Add up to 3 tags to describe what your question is about. Start
                typing to see suggestions.
              </FormDescription>
              <FormMessage className=" text-red-500" />
            </FormItem>
          )}
        />
        <Button
          disabled={isSubmitting}
          className="primary-gradient w-fit !text-light-900"
          type="submit"
        >
          {isSubmitting ? (
            <>{typeForm === "edit" ? "Editing" : "Posting"}</>
          ) : (
            <>{typeForm === "edit" ? "Edit question" : "Ask a question"}</>
          )}
        </Button>
      </form>
    </Form>
  );
};

export default QuestionForm;
