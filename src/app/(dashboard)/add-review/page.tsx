"use client";

import Spinner from "@/components/Spinner";
import { FileUpload } from "@/components/ui/FileUpload";
import { useFileUploadMutation } from "@/redux/feature/project/projectApi";
import { useAddReviewMutation } from "@/redux/feature/review/reviewApi";
import { ChangeEvent, useState } from "react";
import { toast } from "sonner";

const AddReviewPage = () => {
  const [formValue, setFormValue] = useState({
    name: "",
    companyName: "",
    description: "",
  });
  const [uploadedFile, setUploadedFile] = useState<File | undefined>();
  const [fileUpload, fileUploadRes] = useFileUploadMutation();
  const [addReview, { isLoading }] = useAddReviewMutation();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    // Input validation
    const validationError = validateForm();
    if (validationError) {
      return toast.error(validationError);
    }

    try {
      // Prepare form data and upload file
      const formData = createFormData(uploadedFile);
      const image = await uploadImage(formData);

      // Handle image upload success
      if (image) {
        const payload = { ...formValue, image: image.data };
        const res = await addReview(payload).unwrap();

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
    const { name, companyName, description } = formValue;
    if (!name || !companyName || !description) {
      return "All fields are required";
    }

    if (!uploadedFile) {
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
          <label className="font-medium" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formValue.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border focus:border-neutral-500 focus:outline-none transition-colors"
            placeholder="Enter your name"
          />
        </div>
        <div className="space-y-2 w-full">
          <label className="font-medium" htmlFor="company name">
            Company Name
          </label>
          <input
            id="company name"
            type="text"
            name="companyName"
            value={formValue.companyName}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border focus:border-neutral-500 focus:outline-none transition-colors"
            placeholder="Enter company name"
          />
        </div>

        <div className="w-full">
          <label className="font-medium" htmlFor="description">
            Description
          </label>
          <textarea
            rows={6}
            name="description"
            value={formValue.description}
            onChange={handleChange}
            placeholder="Enter description..."
            className="w-full px-4 py-2 rounded-md border focus:border-neutral-500 focus:outline-none transition-colors"
          ></textarea>
        </div>

        <FileUpload
          acceptedTypes={["image/jpeg", "image/png"]}
          maxSizeMB={5}
          onUpload={(file) => setUploadedFile(file)}
          onRemoveFile={() => setUploadedFile(undefined)}
          label="Upload your picture"
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

export default AddReviewPage;
