import EditorRichText from "@/core/components/EditorRichText";
import UploadThingFileInput from "@/core/components/UploadThingFileInput";
import addBlog from "@/features/blogs/mutations/addBlog";
import { InputAddBlogType, InputAddTBlog } from "@/features/blogs/schema";
import { useMutation } from "@blitzjs/rpc";
import { Button, Center, Container, Group, Select, Stack, Text, TextInput, rem } from "@mantine/core";
import { Form, useForm, zodResolver } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import TextAlign from "@tiptap/extension-text-align";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const AddBlog = () => {
  const [$addBlog, { isLoading }] = useMutation(addBlog);
  const form = useForm<Omit<InputAddBlogType, "content">>({
    validate: zodResolver(InputAddTBlog.omit({ content: true })),
    validateInputOnBlur: true,
  });

  const editor = useEditor({
    extensions: [StarterKit, TextAlign.configure({ types: ["heading", "paragraph"] })],
    content: "",
  });

  return (
    <Container>
      <Center>
        <Stack w={600}>
          <Form
            form={form}
            onSubmit={async () => {
              $addBlog({
                title: form.values.title,
                content: editor?.getHTML() || "",
                category: form.values.category,
                blogImageKey: form.values.blogImageKey,
              });
              notifications.show({
                title: "Succes",
                color: "green",
                message: "Blog created!",
              });
            }}
          >
            <TextInput
              placeholder="Blog title"
              size="lg"
              radius={0}
              fw={600}
              fz={rem(28)}
              {...form.getInputProps("title")}
              styles={{ input: { border: "none", borderBottom: "1px solid #DFDFE4" } }}
            />

            <UploadThingFileInput form={form} label="Blog Image" name="blogImageKey" />

            <Stack>
              <Text tt="uppercase" fz={rem(14)}>
                Catégorie de blog
                <Text fw={400} c={"red"} span>
                  *
                </Text>
              </Text>
              <Select
                size="lg"
                placeholder="Choisissez une catégorie"
                {...form.getInputProps("category")}
                data={[
                  "Entraînement",
                  "Nutrition",
                  "Santé mentale",
                  "Motivation",
                  "Récupération",
                  "Techniques avancées",
                  "Histoires de réussite",
                  "Conseils pour débutants",
                  "Exercices spécifiques",
                  "Équipement de gym",
                ]}
              />
            </Stack>

            <Stack gap={rem(10)}>
              <Text tt="uppercase" fz={rem(14)}>
                Blog Description
                <Text fw={400} c={"red"} span>
                  *
                </Text>
              </Text>
              <EditorRichText editor={editor} />
            </Stack>
            <Group>
              <Button loading={isLoading} disabled={!form.isValid() || !editor?.getText()} type="submit">
                Publier
              </Button>
            </Group>
          </Form>
        </Stack>
      </Center>
    </Container>
  );
};

export default AddBlog;
