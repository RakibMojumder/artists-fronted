"use client";

import Spinner from "@/components/Spinner";
import { FileUpload } from "@/components/ui/FileUpload";
import MultiSelect from "@/components/ui/MultiSelect";
import {
  useCreateProjectMutation,
  useFileUploadMutation,
} from "@/redux/feature/project/projectApi";
import { useState } from "react";
import { toast } from "sonner";
type Option = {
  value: string;
  label: string;
};

const options = [
  { value: "UI/UX Design", label: "UI/UX Design" },
  { value: "Property Portal", label: "Property Portal" },
  { value: "E-commerce", label: "E-commerce" },
  { value: "Digital Products", label: "Digital Products" },
  { value: "Development", label: "Development" },
  { value: "Mobile Apps", label: "Mobile Apps" },
  { value: "Web Development", label: "Web Development" },
  { value: "Cloud Solutions", label: "Cloud Solutions" },
  { value: "AI/ML", label: "AI/ML" },
  { value: "Blockchain", label: "Blockchain" },
  { value: "SEO", label: "SEO" },
  { value: "Digital Marketing", label: "Digital Marketing" },
  { value: "Software Engineering", label: "Software Engineering" },
  { value: "Cybersecurity", label: "Cybersecurity" },
  { value: "Data Science", label: "Data Science" },
];

const AddWorkPage = () => {
  const [title, setTitle] = useState("");
  const [selected, setSelected] = useState<Option[]>([]);
  const [uploadFile, setUploadedFile] = useState<File | undefined>();
  const [fileUpload, fileUploadRes] = useFileUploadMutation();
  const [createProject, { isLoading }] = useCreateProjectMutation();

  const handleSubmit = async () => {
    // Input validation
    const validationError = validateForm();
    if (validationError) {
      return toast.error(validationError);
    }

    try {
      // Prepare form data and upload file
      const formData = createFormData(uploadFile);
      const image = await uploadImage(formData);

      // Handle image upload success
      if (image) {
        const payload = {
          title,
          tags: selected.map((tag) => tag.value),
          image: image.data,
        };
        const res = await createProject(payload).unwrap();

        // Show success toast
        toast.success(res?.message);

        // Reset state
        window.location.reload();
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      // Handle errors
      console.error(error);
      toast.error(error.data?.message || "An error occurred.");
    }
  };

  // Separate form validation logic
  const validateForm = (): string | null => {
    if (!title || !selected.length) {
      return "All fields are required";
    }

    if (!uploadFile) {
      return "Please upload a file.";
    }

    return null;
  };

  // Extract form data creation logic
  const createFormData = (file: File | undefined): FormData => {
    const formData = new FormData();
    if (file) {
      formData.append("file", file);
    }
    return formData;
  };

  // Handle image upload
  const uploadImage = async (formData: FormData) => {
    try {
      return await fileUpload(formData).unwrap();
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      throw new Error("File upload failed.");
    }
  };

  return (
    <div className="h-full flex justify-center py-12">
      <div className="max-w-2xl w-full bg-white/50 backdrop-blur flex flex-col items-center gap-y-5 p-20 border">
        <div className="space-y-2 w-full">
          <label className="font-medium" htmlFor="title">
            Project Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 rounded-md border focus:border-neutral-500 focus:outline-none transition-colors"
            placeholder="Enter project title"
          />
        </div>
        <div className="w-full">
          <p className="font-medium mb-2">Select Tags</p>
          <MultiSelect
            options={options}
            selected={selected}
            onChange={setSelected}
            placeholder="Select tag..."
            className="bg-white w-full"
          />
        </div>

        <FileUpload
          acceptedTypes={["image/jpeg", "image/png"]}
          maxSizeMB={5}
          onUpload={(file) => setUploadedFile(file)}
          onRemoveFile={() => setUploadedFile(undefined)}
          label="Upload project picture"
          fileTypeDescription="Supports: JPEG, PNG"
          className="w-full"
        />

        <button
          onClick={handleSubmit}
          disabled={isLoading || fileUploadRes.isLoading}
          className={`w-full py-3 rounded-md ${
            isLoading || fileUploadRes.isLoading
              ? "bg-primary/30 flex justify-center items-center"
              : "bg-primary text-white"
          }`}
        >
          {isLoading || fileUploadRes.isLoading ? <Spinner /> : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default AddWorkPage;
