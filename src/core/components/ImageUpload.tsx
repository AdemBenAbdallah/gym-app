import { Box, Button, Center, FileButton, Flex, Group, Image, Stack } from "@mantine/core";
import React, { useEffect, useRef, useState } from "react";

type ImageUploadProps = {
  fileUploaded: File | null;
  setFileUploaded: (fileUploaded: File | null) => void;
  width: string;
  height: string;
  children?: React.ReactNode;
};

const ImageUpload = ({ fileUploaded, setFileUploaded, width, height, children }: ImageUploadProps) => {
  const [isImageUploaded, setIsImageUploaded] = useState(false);
  const resetRef = useRef<() => void>(null);

  useEffect(() => {
    if (fileUploaded) setIsImageUploaded(true);
  }, [fileUploaded]);

  const clearFile = () => {
    setFileUploaded(null);
    resetRef.current?.();
    setIsImageUploaded(false);
  };

  return (
    <Group>
      <Flex
        align="center"
        justify="center"
        w={width}
        h={height}
        bg="#EDF1FD"
        pos="relative"
        style={{ border: "1px dashed #2C74FF", borderRadius: "0.5rem" }}
      >
        {children}
        {isImageUploaded && fileUploaded && (
          <Box pos={"absolute"} top={0} bottom={0}>
            <Image w={"100%"} h={"100%"} src={URL.createObjectURL(fileUploaded)} alt="Uploaded file" />
          </Box>
        )}
      </Flex>
      <Center>
        <Stack>
          <FileButton resetRef={resetRef} onChange={setFileUploaded} accept="image/png,image/jpeg">
            {(props) => <Button {...props}>Upload</Button>}
          </FileButton>
          <Button disabled={!isImageUploaded} color="red" onClick={clearFile}>
            Reset
          </Button>
        </Stack>
      </Center>
    </Group>
  );
};

export default ImageUpload;
